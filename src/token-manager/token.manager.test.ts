import test from 'ava';

const fn = () => 'foo';

test('fn() returns foo', (t) => {
  t.is(fn(), 'foo');
});

test('fn() returns foo again', (t) => {
  t.is(fn(), 'foo');
});
