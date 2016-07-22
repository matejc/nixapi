'use strict';

const express = require('express');
const config = require('./config');
const MicroKit = require('microkit');
const app = express();
const microkit = new MicroKit({
    name: config.pkg.name,
    express: app,
    logger: {
        name: 'console', formatter: 'pretty'
    }
});

global.logger = microkit.logger;

module.exports = app;

app.use(microkit.express.preHandler);

require('./config/express')(app);

require('./config/routes')(app);

app.use(microkit.express.postHandler);

function listen() {
    app.listen(config.port, () => {
        logger.info('Express app started on port ' + config.port);
    });
}

listen();
