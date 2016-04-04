modern-enb
==========

Modern set of enb technologies for the common tasks.

A small attempt of mine to build modern and stable enb technologies. Also it's a small desire to integrate well known solutions like [postcss](https://github.com/postcss/postcss) to the unknown [enb](https://github.com/enb/enb).


## Technologies

### css

Internally built on top of [postcss](https://github.com/postcss/postcss). Also uses [postcss-import](https://github.com/postcss/postcss-import) and [postcss-url](https://github.com/postcss/postcss-url) to concat files and resolve urls.

```javascript
module.exports = function (config) {
  config.node('pages/index', function (nodeConfig) {
    nodeConfig.addTargets([
      '?.css',
    ]);

    nodeConfig.addTechs([
      [require('enb/techs/file-provider'), {target: '?.bemdecl.js'}],
      [require('enb-bem-techs/techs/levels'), {levels: []}],
      require('enb-bem-techs/techs/deps-old'),
      require('enb-bem-techs/techs/files'),
    ]);

    nodeConfig.addTechs([
      [require('modern-enb/techs/css'), {
        autoprefixer: {
          browsers: ['last 2 versions'],
        },
        url: {
          filter: /\.svg$/,
          url: 'inline',
        },
      }],
    ]);
  });
};
```

Arguments:

- `autoprefixer (object)` &mdash; provides options to [autoprefixer](https://github.com/postcss/autoprefixer): https://github.com/postcss/autoprefixer#options
- `url (object|object[])` &mdash; by default [postcss-url](https://github.com/postcss/postcss-url) rebases urls in css. But this option provides possibility to attach another instance with additional options: https://github.com/postcss/postcss-url#options. You may want to use it to inline pictures or copy them to the different place.


## License

> The MIT License
