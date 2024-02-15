const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  getKeyWithMessageLength(message, key) {
    if (key.length >= message.length) {
      return key.slice(0, message.length);
    } else {
      return key.padEnd(message.length, key);
    }
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    const keyWithMessageLength = this.getKeyWithMessageLength(
      message.split(" ").join(""),
      key
    );
    let j = 0;

    const res = message
      .split(" ")
      .map((word) => {
        let encryptedMessage = "";
        for (let i = 0; i < word.length; i++) {
          const messageChar = word[i];
          let encryptedChar = "";

          if (/[a-zA-Z]/.test(messageChar)) {
            const messageCharCode = messageChar.toUpperCase().charCodeAt(0);
            const keyCharCode = keyWithMessageLength[j]
              .toUpperCase()
              .charCodeAt(0);
            j++;
            const encryptedCharCode = (messageCharCode + keyCharCode) % 26;
            encryptedChar = String.fromCharCode(encryptedCharCode + 65);
          } else {
            encryptedChar = messageChar;
          }
          encryptedMessage += encryptedChar;
        }
        return encryptedMessage;
      })
      .join(" ");

    return this.isDirect ? res : res.split("").reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }
    const keyWithMessageLength = this.getKeyWithMessageLength(
      encryptedMessage.split(" ").join(""),
      key
    );
    let j = 0;

    const res = encryptedMessage
      .split(" ")
      .map((word) => {
        let decryptedMessage = "";

        for (let i = 0; i < word.length; i++) {
          const encryptedChar = word[i];
          let decryptedChar = "";

          if (/[A-Za-z]/.test(encryptedChar)) {
            const encryptedCharCode = encryptedChar.toUpperCase().charCodeAt(0);
            const keyCharCode = keyWithMessageLength[j]
              .toUpperCase()
              .charCodeAt(0);
            j++;
            const decryptedCharCode =
              (encryptedCharCode - keyCharCode + 26) % 26;
            decryptedChar = String.fromCharCode(decryptedCharCode + 65);
          } else {
            decryptedChar = encryptedChar;
          }

          decryptedMessage += decryptedChar;
        }
        return decryptedMessage;
      })
      .join(" ");
    return this.isDirect ? res : res.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
