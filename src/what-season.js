const { NotImplementedError } = require("../extensions/index.js");

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
    return "Unable to determine the time of year!";
  } else {
    try {
      let month = a.getUTCMonth();
      if (month === 0 || month === 1 || month === 11) return "winter";
      if (month === 2 || month === 3 || month === 4) return "spring";
      if (month === 5 || month === 6 || month === 7) return "summer";
      if (month === 8 || month === 9 || month === 10) return "autumn";
      throw new Error("Invalid date!");
    } catch {
      throw new Error("Invalid date!");
    }
  }
}

module.exports = {
  getSeason,
};
