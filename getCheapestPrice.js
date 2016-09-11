'use strict';

let cachedPrices = {};

let getPrice = require('./priceCheck').getPrice;

module.exports = (gameId) => {
    return new Promise((resolve) => {
        if (cachedPrices[gameId]) {
            resolve(cachedPrices[gameId]);
        }
        getPrice(gameId).then(gameData => {
            cachedPrices[gameId] = gameData.discountedPrice;
            resolve(gameData.discountedPrice);
        });
    });
    
};