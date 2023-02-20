#!/bin/bash
# ------------------------------------------------------------------
# [Author] Bryan McGrane
# [Title] Sensory Cloud Node SDK Helper Script
# ------------------------------------------------------------------
SUBJECT=no
USAGE="Usage: no [OPTIONS] [COMMAND]"

OPTIONS="
    Options:\n
    -h\t Helper Script Description
"

COMMANDS="
    Commands:\n
    build | b\t\t Build Tsc Package\n
    publish | p\t\t Publish Tsc Package\n
    genproto | gp\t\t Generate Proto Files\n
    help | h\t\t Display a Help Message\n
"
# --- Initialization -----------------------------------------------
set -euo pipefail

# --- Functions ----------------------------------------------------
print_helper() {
  echo
  echo ${USAGE}
  echo
  echo -e ${OPTIONS}
  echo
  echo -e ${COMMANDS}
}

throw_not_implemented_error() {
  echo "This feature is not yet implemented!"
  exit 125;
}

generate_proto_files() {
  echo "Generating proto files"
  npm install -g grpc-tools
  npm install grpc_tools_node_protoc_ts --save-dev

  cd proto/

  PROTOC_GEN_TS_PATH="../node_modules/.bin/protoc-gen-ts"

  for x in $(find . -iname "*.proto");
  do
    grpc_tools_node_protoc \
      --plugin=protoc-gen-ts=${PROTOC_GEN_TS_PATH} \
      --ts_out=grpc_js:../src/generated \
      --js_out=import_style=commonjs:../src/generated \
      --grpc_out=grpc_js:../src/generated \
      $x

      echo "Generated grpc code for $x";
  done
  cd ..
}

build() {
  echo "Building Sensory Cloud Web SDK"
  generate_proto_files
  mkdir -p ./dist/generated
  cp -r ./src/generated ./dist
  npx tsc
}

# --- Environment --------------------------------------------------
IMAGE=ph
CONTAINER=ph_web
CURRENT_BRANCH=${CI_COMMIT_BRANCH:-$(git rev-parse --symbolic-full-name --abbrev-ref HEAD)}

# --- Options processing -------------------------------------------
if [ $# == 0 ] ; then
    print_helper
    exit 1;
fi

while getopts ":h" optname
  do
    case "$optname" in
      "h")
        print_helper
        ;;
      "?")
        echo "Unknown option $OPTARG"
        exit 0;
        ;;
      ":")
        echo "No argument value for option $OPTARG"
        exit 0;
        ;;
      *)
        echo "Unknown error while processing options"
        exit 0;
        ;;
    esac
  done

shift $(($OPTIND - 1))

# --- Body --------------------------------------------------------
case "$1" in
  "lint"|"l")
    ng lint --fix
  ;;

  "build"|"b")
    build
  ;;

  "publish"|"p")
    build

    if [ "$1" == "-login" ]; then
      npm login
    fi

    npm publish --access public
  ;;

  "genproto"|"gp")
    generate_proto_files
    exit 0;
  ;;

  "help"|"h")
    print_helper
  ;;

  *)
    print_helper
    exit 0;
  ;;

esac
# -----------------------------------------------------------------
