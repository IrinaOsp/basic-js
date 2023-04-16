const { NotImplementedError } = require('../extensions/index.js');

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
  function getDNSStats(domains) {
    let res = {}
      domains.forEach(el => {
        let count = 0
        
        el.split('.').reverse().forEach((e, ind, array) => {
              console.log(e)
            
              if (ind>0) {
                for (i=1; i<=ind; i++) {
                  res[`.${array[i-1]}.${e}`] = count + 1
                }
                
              } else {
                res[`.${e}`] = count + 1
              }
          console.log(res)
        })
      })
      console.log('result: ')
      return res
    }
}

module.exports = {
  getDNSStats
};
