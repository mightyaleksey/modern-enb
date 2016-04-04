const EOL = require('os').EOL;
const relative = require('path').relative;

/**
 * @param  {string[]} files
 * @param  {string}   cwd
 * @return {string}
 */
module.exports = function concat(files, cwd) {
  return files.map(file => resolveImport(cwd, file)).join(EOL);
};

/**
 * @param  {string} cwd
 * @param  {string} filepath
 * @return {string}
 */
function resolveImport(cwd, filepath) {
  return `@import "${relative(cwd, filepath)}";`;
}
