'use strict';

require('dotenv').config({ silent: true });

module.exports = {
    firebase: {
        serviceAccount: {
            projectId: process.env.fb_projectId,
            clientEmail: process.env.fb_clientEmail,
            privateKey: process.env.fb_privateKey
        },
        databaseURL: process.env.fb_databaseURL
    }
};