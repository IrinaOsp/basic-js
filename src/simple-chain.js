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
    if (this.chains.length === 0) {
      this.chains.push(`( ${value} )`)
      return this.chains
    } else {
      return this.chains.push(`~~( ${value} )`)
    }
  },
  removeLink(position) {
    if (position < 0 || position > this.chains.length) {
      throw new Error("You can't remove incorrect link!")
    } else {
      this.chains[position-1] = ''
    }
  },
  reverseChain() {
    
  },
  finishChain() {
    return this.chains.join('')
  }
};

module.exports = {
  chainMaker
};
