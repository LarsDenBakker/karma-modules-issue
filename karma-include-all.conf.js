const path = require('path');

/**
 * Creates base karma configuration.
 */
module.exports = config => {
  config.set({
    files: [
      { pattern: 'test/**/*.test.js', type: 'module' },
      { pattern: 'src/*.js', type: 'module', included: false },
      { pattern: 'node_modules/**/*', type: 'module', included: false },
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
