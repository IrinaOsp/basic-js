const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chains: [],
  getLength() {
    return this.chains.length
  },
  addLink(value) {
    if (typeof value !== 'underfined') {
      this.chains.push(`( ${value} )`)
    } else {
      this.chains.push('(  )')
    }
      return this
  },
  removeLink(position) {
    if (position <= 0 || position > this.chains.length || position%1 !== 0 || typeof position !== 'number') {
      this.chains = []
      throw new Error("You can't remove incorrect link!")
    } else {
      this.chains = this.chains.slice(0, position-1).concat(this.chains.slice(position))
    }
    return this
  },
  reverseChain() {
    this.chains.reverse()
    return this
  },
  finishChain() {
    let res = this.chains.join('~~')
    this.chains = []
    return res
  }
};

module.exports = {
  chainMaker
};
