const postcss = require('postcss');
const { createFilter } = require('rollup-pluginutils');

module.exports = function postcssPlugin({
  include = '**/*.css',
  exclude,
  plugins,
  ...options
} = {}) {
  const filter = createFilter(include, exclude);

  return {
    name: 'postcss',
    async transform(code, id) {
      if (!filter(id)) return;

      const { css, map } = await postcss(plugins).process(code, {
        from: id,
        map: { inline: false },
        ...options
      });

      return {
        code: css,
        map: map.toJSON()
      };
    }
  };
};
