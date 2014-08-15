// # Ghost bootloader
// Orchestrates the loading of Ghost
// When run from command line.

// New Relic app monitoring
require('newrelic');

var ghost = require('./core'),
    errors = require('./core/server/errors');

ghost().otherwise(function (err) {
    errors.logErrorAndExit(err, err.context, err.help);
});
