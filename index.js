'use strict';

var defaultTargets = {
  node: "6.10"
};

function buildAwsBabelPreset(ctx, config) {
  config = config || {};
  return {
    presets: [
      require('@babel/preset-env').default(null, {
        debug: !!config.debug,
        modules: false,
        exclude: [
          'transform-regenerator',
        ]
        targets: config.targets || defaultTargets
      })
    ],
    plugins: [
      require('@babel/plugin-transform-async-to-generator'),
      require('@babel/plugin-transform-exponentiation-operator'),
      [
        require('@babel/plugin-proposal-object-rest-spread'),
        {
          useBuiltIns: true
        }
      ]
    ],
  };
}

module.exports = buildAwsBabelPreset;
