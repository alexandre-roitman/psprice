'use strict';

const getWatchers = require('./getWatchers');

getWatchers()
    .then(users => console.log(users))
    .then(process.exit);