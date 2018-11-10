# babel-preset-aws-lambda

Works with babel 7. This package requires "@babel/core" as a peer dependency.

> Babel preset for AWS λ functions

This preset currently transforms code to be compatible with node versions of amazon AWS lambda funcions.
- Defaults transpiling code to node version `6.10`.
- `regenerator-runtime` is too heavyweight so it is excluded.
- [Object rest/spread transform](https://babeljs.io/docs/plugins/transform-object-rest-spread/).
- [Async/await](https://babeljs.io/docs/plugins/transform-async-to-generator/).
- [Exponentiation Operator](https://babeljs.io/docs/plugins/syntax-exponentiation-operator/).


## Install

```sh
$ npm install --save-dev babel-preset-aws-lambda
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["aws-lambda"]
}
```

### Via CLI

```sh
$ babel script.js --presets aws-lambda
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  presets: ["aws-lambda"]
});
```

### Targeting Environments

This module uses `babel-preset-env` to target specific environments.

Please refer to [babel-preset-env#targets](https://github.com/babel/babel-preset-env#targets) for a list of available options.

You may override our default list of targets by providing your own `targets` key.

```json
{
  "presets": [["aws-lambda", {
    "targets": {
      "node": 4
    }
  }]]
}
```

To enable debug mode, set the `debug` key to `true`.

```json
{
  "presets": [["aws-lambda", {
    "debug": true
  }]]
}
```
