export class CryptoConstants
{
    static BEGIN_PRIVATE_KEY = '-----BEGIN PRIVATE KEY-----\n';
    static END_PRIVATE_KEY = '\n-----END PRIVATE KEY-----';
    static BEGIN_PUBLIC_KEY = '-----BEGIN PUBLIC KEY-----\n';
    static END_PUBLIC_KEY = '\n-----END PUBLIC KEY-----';

    static SECP_256_K_1_PRIVATE_KEY_CONSTANT_PART1 = '308184020100301006072a8648ce3d020106052b8104000a046d306b0201010420';
    static SECP_256_K_1_PRIVATE_KEY_CONSTANT_PART2 = 'a144034200';
    static SECP_256_K_1_PUBLIC_KEY_CONSTANT_PART1 = '3056301006072a8648ce3d020106052b8104000a034200';

    static BASE64 = 'base64' as any;
    static HEX = 'hex' as any;

    static SECP_256_K_1 = 'secp256k1';

    static AES_256_GCM = "aes-256-gcm";

    static SHA256 = 'sha256';
    static MD5 = 'MD5';
}
