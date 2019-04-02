const _ = require('lodash');
const className = 'order';

module.exports = function({ order, variants }) {
  return function({ addUtilities, e }) {
    let utilties = _.map(order, (val, name) => ({
      [`.${e(`${className}-${name}`)}`]: {
        order: val
      }
    }));
    addUtilities(utilties, variants);
  }
}