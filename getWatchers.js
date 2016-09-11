'use strict';

const firebase = require('./firebaseFacade');

module.exports = () => {
    return new Promise((resolve) => {
        firebase.database().ref('usersData').once('value').then(snapshot => {
            resolve(snapshot.val());
        });
    });
};