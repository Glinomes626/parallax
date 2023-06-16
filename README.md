[![EditorConfig](https://github.com/Zaluper626/parallax/actions/workflows/editirconfig.yml/badge.svg)](https://github.com/Zaluper626/parallax/actions/workflows/editirconfig.yml)
[![ESLint](https://github.com/Zaluper626/parallax/actions/workflows/lint.yml/badge.svg)](https://github.com/Zaluper626/parallax/actions/workflows/lint.yml)
[![HTML](https://github.com/Zaluper626/parallax/actions/workflows/html.yml/badge.svg)](https://github.com/Zaluper626/parallax/actions/workflows/html.yml)
[![Stylelint](https://github.com/Zaluper626/parallax/actions/workflows/stylelint.yml/badge.svg)](https://github.com/Zaluper626/parallax/actions/workflows/stylelint.yml)

<div align="center">
    <a href="https://github.com/webpack/webpack">
        <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
    </a>
    <h1>webpack</h1>
    <p>
        Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource         or asset.
    </p>
    <h2 align="center">Install</h2>

Install with npm:

```bash
npm install --save-dev webpack
```
    
Install with yarn:

```bash
yarn add webpack --dev
```
</div>

<h2 align="center">Introduction</h2>

Webpack is a bundler for modules. The main purpose is to bundle JavaScript
files for usage in a browser, yet it is also capable of transforming, bundling,
or packaging just about any resource or asset.

**TL;DR**

- Bundles [ES Modules](https://www.2ality.com/2014/09/es6-modules-final.html), [CommonJS](http://wiki.commonjs.org/), and [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD) modules (even combined).
- Can create a single bundle or multiple chunks that are asynchronously loaded at runtime (to reduce initial loading time).
- Dependencies are resolved during compilation, reducing the runtime size.
- Loaders can preprocess files while compiling, e.g. TypeScript to JavaScript, Handlebars strings to compiled functions, images to Base64, etc.
- Highly modular plugin system to do whatever else your application requires.

### Get Started

Check out webpack's quick [**Get Started**](https://webpack.js.org/guides/getting-started) guide and the [other guides](https://webpack.js.org/guides/).

### Browser Compatibility

Webpack supports all browsers that are [ES5-compliant](https://kangax.github.io/compat-table/es5/) (IE8 and below are not supported).
Webpack also needs `Promise` for `import()` and `require.ensure()`. If you want to support older browsers, you will need to [load a polyfill](https://webpack.js.org/guides/shimming/) before using these expressions.
    
