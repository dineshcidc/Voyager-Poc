import CryptoJS from "crypto-js";

//  16-byte keys from Nublo
const AES_KEY = CryptoJS.enc.Utf8.parse(
  import.meta.env.VITE_ENCRYPTION_SECRET_KEY
);
const AES_IV = CryptoJS.enc.Utf8.parse(
  import.meta.env.VITE_INITIALIZATION_VECTOR
);
const KEY_SIZE = import.meta.env.VITE_ENCRYPTION_KEYSIZE;

// Encrypt payload: JSON stringify, encrypt, return Base64 string
export function encryptPayload(payload) {
  const stringData = JSON.stringify(payload);
  const encrypted = CryptoJS.AES.encrypt(stringData, AES_KEY, {
    keySize: KEY_SIZE,
    iv: AES_IV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  // Return wrapped object
  return { data: encrypted.toString() };
}

export function decryptPayload(response) {
  try {
    let encryptedString = null;
    if (typeof response.data === "string") {
      encryptedString = response.data; // encrypted string directly in data
    } else if (response.data && response.data.data) {
      encryptedString = response.data.data; // nested inside data.data
    } else {
      console.warn("Unexpected encrypted data structure", response);
      return null;
    }
    return decryptData(encryptedString);
  } catch (e) {
    console.log("decryptPayload error", e);
    return null;
  }
}

// decryptData function as in your working second code:
export function decryptData(encryptedData) {
  const decrypted = CryptoJS.AES.decrypt(encryptedData, AES_KEY, {
    keySize: KEY_SIZE,
    iv: AES_IV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  const decryptedStr = decrypted.toString(CryptoJS.enc.Utf8);
  return JSON.parse(decryptedStr);
}
