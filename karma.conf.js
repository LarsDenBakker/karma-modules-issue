const path = require('path');

/**
 * Creates base karma configuration.
 */
module.exports = config => {
  config.set({
    files: [
      { pattern: 'test/**/*.test.js', type: 'module' },
    ],

    browsers: ['Chrome'],

    frameworks: ['mocha'],

    reporters: ['mocha'],

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: false,
    singleRun: false,
  });
};
