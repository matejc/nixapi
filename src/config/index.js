
const pkg = require('../../package.json');


module.exports = {
    pkg,
    port: 3000,
    env: process.env.NODE_ENV || 'development'
};
