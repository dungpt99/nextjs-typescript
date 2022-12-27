import crypto from "crypto";
import { CryptoConstants } from "./crypto.constants";

export class CryptoUtil {
  static privateKeyHexToPem(privateKey: string) {
    const publicKey = this.takeKeyPair(privateKey).publicKey;
    // build privateKey (secp256k1)
    const privateKeyBase64 = CryptoConstants.SECP_256_K_1_PRIVATE_KEY_CONSTANT_PART1.concat(
      privateKey
    )
      .concat(CryptoConstants.SECP_256_K_1_PRIVATE_KEY_CONSTANT_PART2)
      .concat(publicKey as any);
    // build privateKey  (file PEM)
    return CryptoConstants.BEGIN_PRIVATE_KEY.concat(
      Buffer.from(privateKeyBase64, CryptoConstants.HEX).toString(CryptoConstants.BASE64)
    ).concat(CryptoConstants.END_PRIVATE_KEY);
  }

  static publicKeyHexToPem(publicKey: any) {
    // build publicKey (secp256k1)
    const publicKeyBase64 =
      CryptoConstants.SECP_256_K_1_PUBLIC_KEY_CONSTANT_PART1.concat(publicKey);
    // build publicKey (file PEM)
    return CryptoConstants.BEGIN_PUBLIC_KEY.concat(
      Buffer.from(publicKeyBase64, CryptoConstants.HEX).toString(CryptoConstants.BASE64)
    ).concat(CryptoConstants.END_PUBLIC_KEY);
  }

  static hexToPem(keyPair: any) {
    return {
      privateKey: this.privateKeyHexToPem(keyPair.privateKey),
      publicKey: this.publicKeyHexToPem(keyPair.publicKey),
    };
  }

  static takeKeyPair(privateKey?: string, outputEncoding = CryptoConstants.HEX) {
    privateKey = privateKey?.toLowerCase();
    const ecdh = crypto.createECDH(CryptoConstants.SECP_256_K_1);

    if (privateKey?.length === 64 && privateKey.match(/[\da-f]+/g))
      ecdh.setPrivateKey(Buffer.from(privateKey, CryptoConstants.HEX));
    else ecdh.generateKeys();
    return {
      privateKey: ecdh.getPrivateKey(outputEncoding),
      publicKey: ecdh.getPublicKey(outputEncoding),
    };
  }

  static signing(privateKey: string, data: any, option?: any) {
    const sign = crypto.createSign(option?.algorithm || CryptoConstants.SHA256);
    sign.update(typeof data === "object" ? JSON.stringify(data) : data);
    const keyPairHex = this.takeKeyPair(privateKey);
    const signature = sign.sign(this.hexToPem(keyPairHex).privateKey, CryptoConstants.HEX);

    return {
      signature,
      data,
      publicKey: keyPairHex.publicKey,
    };
  }

  static verify(publicKey: any, signature: any, data: any, option?: any) {
    const verify = crypto.createVerify(option?.algorithm || CryptoConstants.SHA256);
    verify.update(typeof data === "object" ? JSON.stringify(data) : data);
    return verify.verify(this.publicKeyHexToPem(publicKey), signature, CryptoConstants.HEX);
  }

  private static hashMD5 = (data: any) =>
    crypto
      .createHash(CryptoConstants.MD5)
      .update(data, "utf-8")
      .digest(CryptoConstants.HEX)
      .toUpperCase();

  static encryptAES(secretKey: string, data: any) {
    const cipher = crypto.createCipheriv(
      CryptoConstants.AES_256_GCM,
      this.hashMD5(secretKey),
      Buffer.from(new Array(16))
    );
    return (
      cipher.update(data, "utf-8", CryptoConstants.BASE64) + cipher.final(CryptoConstants.BASE64)
    );
  }

  static decryptAES(secretKey: string, dataEncrypt: any) {
    const decipher = crypto.createDecipheriv(
      CryptoConstants.AES_256_GCM,
      this.hashMD5(secretKey),
      Buffer.from(new Array(16))
    );
    return decipher.update(dataEncrypt, CryptoConstants.BASE64, "utf-8");
  }

  static computeSecretECDH(privateKeyOwn: string, publicKeyTheir: any) {
    const ecdh = crypto.createECDH(CryptoConstants.SECP_256_K_1);
    ecdh.setPrivateKey(privateKeyOwn, CryptoConstants.HEX);
    return ecdh.computeSecret(publicKeyTheir, CryptoConstants.HEX, CryptoConstants.HEX);
  }
}
