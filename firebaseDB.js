'use strict';

require('dotenv').config({ silent: true });

const firebase = require("firebase");

firebase.initializeApp({
    serviceAccount: {
        projectId: process.env.fb_projectId,
        clientEmail: process.env.fb_clientEmail,
        privateKey: process.env.fb_privateKey
    },
    databaseURL: process.env.fb_databaseURL
});

module.exports = firebase.database();
