const crypto = require('crypto');
const fs = require('fs');

let origTxt = "Hello World";
let fileContent = fs.readFileSync("./file.txt");

//hashing
let ciphertext = crypto.createHash("sha512").update(fileContent).digest("hex");
console.log(typeof(ciphertext));
console.log(ciphertext);

//symmetric encryption

//encryption
//console.log(crypto.getHashes());
let key = "password";
let cipher = crypto.createCipher("aes-256-cbc", key)
let encryptedMsg = cipher.update(fileContent, 'utf-8', "hex");
encryptedMsg += cipher.final("hex");
console.log("ciphertext: " + encryptedMsg);

//decryption
let decipher = crypto.createDecipher("aes-256-cbc",key);
let decryptedMsg = decipher.update(encryptedMsg, "hex", 'utf-8');
decryptedMsg += decipher.final('utf-8');
console.log("Original Message :" + decryptedMsg);