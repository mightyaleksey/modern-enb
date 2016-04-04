const concat = require('../lib/concat');
const extractFilepath = require('../lib/extractFilepath');
const outputWarnings = require('../lib/outputWarnings');
const postcss = require('postcss');
const resolve = require('path').resolve;
const toArray = require('../lib/toArray');

const autoprefixer = require('autoprefixer');
const atImport = require('postcss-import');
const atUrl = require('postcss-url');

module.exports = require('enb/lib/build-flow').create()
  .name('css')
  .target('target', '?.css')
  .defineOption('autoprefixer')
  .defineOption('url')
  .useFileList('css')
  .builder(function (files) {
    const cwd = this.node.getDir();
    const css = concat(files.map(extractFilepath), cwd);
    const filename = resolve(cwd, this._target);

    const plugins = [
      atImport,
      atUrl({url: 'rebase'}),
    ];

    if (this._url) {
      toArray(this._url).forEach(opts => plugins.push(atUrl(opts)));
    }

    if (this._autoprefixer) {
      plugins.push(autoprefixer(this._autoprefixer));
    }

    return postcss(plugins)
    .process(css, {
      from: `${filename}.virtual`,
      to: filename,
    })
    .then(outputWarnings)
    .then(result => result.css);
  })
  .createTech();
