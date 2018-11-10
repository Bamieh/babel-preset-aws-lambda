'use strict';

var defaultTargets = {
  node: "8.10"
};

function buildAwsBabelPreset(ctx, config) {
  config = config || {};
  const isNode8 = /^8/.test((config.targets || defaultTargets).node);
  return {
    presets: [
      require('@babel/preset-env').default(null, {
        debug: !!config.debug,
        modules: false,
        exclude: [
          'transform-regenerator',
        ],
        targets: config.targets || defaultTargets,
      }),
    ],
    plugins: [
      (!isNode8 && require('@babel/plugin-transform-async-to-generator')),
      (!isNode8 && require('@babel/plugin-transform-exponentiation-operator')),
      (!isNode8 && [require('@babel/plugin-proposal-object-rest-spread'), {
        useBuiltIns: true,
      }]),
    ].filter(Boolean),
  };
}

module.exports = buildAwsBabelPreset;
