'use strict';

const firebaseDB = require('./firebaseDB');

module.exports = () => {
    return new Promise((resolve) => {
        firebaseDB.ref('usersData').once('value').then(snapshot => {
            resolve(snapshot.val());
        });
    });
};