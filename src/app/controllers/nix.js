'use strict';

const NixInterface = require('../../interface');


exports.nixpkgs = (req, res) => {
    let nixpkgs = NixInterface.nixpkgs();
    res.send({nixpkgs});
};
