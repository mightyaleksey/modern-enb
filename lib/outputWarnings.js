/**
 * outputs plugin's warnings
 * @param  {container} result
 * @return {container}
 */
module.exports = function outputWarnings(result) {
  // https://github.com/postcss/postcss/blob/master/docs/api.md#lazywarnings
  result.warnings().forEach(warning => console.warn(warning.text));
  return result;
};
