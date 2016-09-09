let cachedPrices = {};

let getPrice = require('priceCheck').getPrice;

module.exports = (gameId) => {
    return new Promise((resolve, reject) {
        if (cachedPrices[gameId]) {
            resolve(cachedPrices[gameId]);
        }
        getPrice(gameId).then(gameData => {
            cachedPrices[gameId] = gameData.discountedPrice;
            resolve(gameData.discountedPrice);
        });
    });
    
};