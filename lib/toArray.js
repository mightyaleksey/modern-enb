/**
 * @param  {*} item
 * @return {array}
 */
module.exports = function toArray(item) {
  return Array.isArray(item)
    ? item
    : [item];
};
