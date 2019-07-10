# rollup-plugin-postcss

Rollup plugin for [PostCSS](https://postcss.org/).

## Installation

```sh
yarn add -D git+https://github.com/johanholmerin/rollup-plugin-postcss#semver:^1.0.0
```

## Usage

**rollup.config.js**

```javascript
import postcss from 'rollup-plugin-postcss';
import css from 'rollup-plugin-css-only';

export default {
  input: 'main.js',
  output: {
    dir: 'build',
    format: 'es'
  },
  plugins: [
    postcss({
      // default values
      include: '**/*.css'
      exclude: undefined,
      plugins: [
        // postcss plugins
      ],
      // rest will be passed as options to PostCSS
    }),
    css({
      output: 'bundle.css'
    })
  ]
};
```
