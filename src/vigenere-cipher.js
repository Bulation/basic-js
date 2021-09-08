import { NotImplementedError } from '../extensions/index.js';

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
export default class VigenereCipheringMachine {
  reverse = false;
  constructor(value) {
    if (value === false) {
      this.reverse = true;
    }
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let encMessage = '';
    let i = 0;
    for (let char of message) {
        if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
            encMessage += String.fromCharCode(
              ((char.charCodeAt(0) - 65 + key.charCodeAt(i) - 65) % 26) + 65
            );
            i++;
            if (i == key.length) i = 0;
        }
        else {
            encMessage += char;
        }
    }
    if (this.reverse) {
      encMessage = encMessage.split("").reverse().join("");
    } 
    return encMessage;
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let encMessage = "";
    let i = 0;
    for (let char of message) {
      if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
        encMessage += String.fromCharCode(
          ((char.charCodeAt(0) - key.charCodeAt(i) + 26) % 26) + 65
        );
        i++;
        if (i == key.length) i = 0;
      } else {
        encMessage += char;
      }
    }
    if (this.reverse) {
      encMessage = encMessage.split("").reverse().join("");
    }
    return encMessage;
  }
}
