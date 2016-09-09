let _ = require('lodash');
let interval = require('./config').interval;
let getWatchers = require('getWatchers');
let getCheapestPrice = require('getCheapestPrice');
let sendEmail = require('sendEmail');

module.exports = () => {
    setInterval(()=>{
        getWatchers().then(users => {
            _.forEach(users((userData, userId) => {
                _.forEach(userData.tracking, (maxPrice, gameId) => {
                    getCheapestPrice(gameId).then((cheapestPrice) => {
                        if (cheapestPrice <= maxPrice) {
                            sendEmail(userData.email);
                        }
                    });
                });
                
            }));
        });
    }, 300000);
};