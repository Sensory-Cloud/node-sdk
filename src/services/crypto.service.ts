import crypto from 'crypto';

/** Handles cryptographic operations */
export class CryptoService {
  private static readonly base64chars =
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  /**
   * Generates a cryptographically-random string using the browser's crypto library
   * @param  {number} length - length of the string
   * @returns string
   */
  public static getSecureRandomString(length = 26): string {
    return Array.from(crypto.randomBytes(length))
      .map((x) => this.base64chars[x % this.base64chars.length])
      .join('');
  }
}
