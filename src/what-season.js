const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

function getSeason(a) {
  if (!a) {
    return 'Unable to determine the time of year!'
  } else if (Object.prototype.toString.call(a) !== '[object Date]') {
    return 'Invalid date!'
  } else {
    let month = a.getMonth()
    if (a.getMonth() === 'underfined') {
      return 'Unable to determine the time of year!'
    }
  if (month < 2 || month === 11) {return 'winter'}
    else if (month < 5) {return 'spring'}
    else if (month < 8) {return 'summer'}
    else {return 'autumn'}
  }
}

module.exports = {
  getSeason
};
