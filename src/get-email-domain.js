const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let arr = email.split('@')
  if (arr[1].split('')[0].charCodeAt(0)>=65) {
  return arr[1]
  } else {
    return arr[2]
  }
}

module.exports = {
  getEmailDomain
};
