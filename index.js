const _ = require('lodash');
const NixInterface = require('./src/interface.js');

var configurationnix = '/etc/nixos/configuration.nix';
var path = 'environment.systemPackages';
var optionsWithVal = true;

// NixInterface
//     .options(configurationnix, optionsWithVal)
//     .then(function(out) {
//         console.log(JSON.stringify(out, null, 4));
//     });

var obj = {
    users: {
        extraUsers: {
            matejc: {
                extraGroups: ["wheel", "waaaaazaaap"]
            },
            lala: 132
        }
    }
};


NixInterface
    .export(configurationnix, obj, 'nix', true)
    .then(function(out) {
        console.log(out);
    })
    .catch(function(err) {
        console.error(err.stack||err.message||err);
    });
