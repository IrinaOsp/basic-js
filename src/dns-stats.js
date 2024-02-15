const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const res = new Map();
  const sliceDomain = (str) => str.slice(0, str.lastIndexOf("."));
  domains.reduce((acc, domain) => {
    let reversedDomain = "." + domain.split(".").reverse().join(".");
    while (reversedDomain.length > 0) {
      acc.has(reversedDomain)
        ? acc.set(reversedDomain, acc.get(reversedDomain) + 1)
        : acc.set(reversedDomain, 1);
      reversedDomain = sliceDomain(reversedDomain);
    }
    return acc;
  }, res);
  return Object.fromEntries(res);
}

module.exports = {
  getDNSStats,
};
