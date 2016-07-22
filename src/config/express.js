'use strict';

/**
 * Module dependencies.
 */

const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const config = require('./');

/**
 * Expose
 */

module.exports = function (app) {

  // Compression middleware (should be placed before express.static)
  app.use(compression({
    threshold: 512
  }));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

};
