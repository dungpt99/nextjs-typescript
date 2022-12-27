import { CryptoUtil } from "./crypto.util";

const main = () => {
  //   window.Buffer = window.Buffer || require("buffer").Buffer;
  const privateKey = "37516c57e0a3820702ee7163e04b89cab1f1f8211ec8bfda3e38384ed51a65ce";
  const dataExample = {
    pika: "chu chu",
    anla: "kaka",
  };
  const dataFakeExample = {
    pika: "chu　chu",
    anla: "kaka",
  };

  console.log(
    "----------------------------------------------------------------------------------------------------"
  );
  const serverKeyPair = CryptoUtil.takeKeyPair(privateKey);
  const clientKeyPair = CryptoUtil.takeKeyPair();
  console.log("generate new keypair randomly   :", clientKeyPair);
  console.log("create new keypair with privatekey:", serverKeyPair);
  console.log(
    "----------------------------------------------------------------------------------------------------"
  );

  console.log(
    "convert privatekey from hex to pem:",
    CryptoUtil.privateKeyHexToPem(serverKeyPair.privateKey)
  );
  console.log(
    "convert publickey from hex to pem:",
    CryptoUtil.publicKeyHexToPem(serverKeyPair.publicKey)
  );
  console.log("convert keypair from hex to pem :", CryptoUtil.hexToPem(clientKeyPair));
  console.log(
    "----------------------------------------------------------------------------------------------------"
  );

  const clientShareKey = CryptoUtil.computeSecretECDH(
    clientKeyPair.privateKey,
    serverKeyPair.publicKey
  );
  const serverShareKey = CryptoUtil.computeSecretECDH(
    serverKeyPair.privateKey,
    clientKeyPair.publicKey
  );
  console.log("shareKey of Client              :", clientShareKey);
  console.log("shareKey of Server              :", serverShareKey);
  console.log(
    "----------------------------------------------------------------------------------------------------"
  );

  const clientEncryptData = CryptoUtil.encryptAES(clientShareKey, JSON.stringify(dataExample));
  console.log("Encrypt Data                    :", clientEncryptData);
  const serverDecryptData = CryptoUtil.decryptAES(serverShareKey, clientEncryptData);
  console.log("Decrypt Data                    :", serverDecryptData);
  console.log(
    "----------------------------------------------------------------------------------------------------"
  );

  // ký và xác thực
  const signingResult = CryptoUtil.signing(privateKey, dataExample);
  console.log("data returned after signing     :", signingResult);
  console.log(
    "verify with dataexample         :",
    CryptoUtil.verify(signingResult.publicKey, signingResult.signature, dataExample)
  );
  console.log(
    "verify with datafakeexample     :",
    CryptoUtil.verify(signingResult.publicKey, signingResult.signature, dataFakeExample)
  );

  // const signingResult = CryptoUtil.signing(privateKey, new Date().getTime());
  // console.log("data returned after signing     :", signingResult);
  // console.log(
  //   "verify with dataexample         :",
  //   CryptoUtil.verify(signingResult.publicKey, signingResult.signature, dataExample)
  // );
};

main();
