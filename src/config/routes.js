'use strict';

const nix = require('../app/controllers/nix');

/**
 * Expose routes
 */

module.exports = function (app) {

  // home route
  app.get('/', nix.nixpkgs);

};
