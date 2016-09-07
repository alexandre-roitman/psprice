'use strict';

let request = require('request');
let _ = require('lodash');

function getDiscountedPrice(rewards) {
    let discountedPrices = rewards.map((reward) => {
        return reward.bonus_price ? reward.bonus_price : reward.price;
    });

    let cheapestPriceIndex = _.findIndex(rewards, {'price': _.min(discountedPrices)});
    let cheapestBonusPriceIndex = _.findIndex(rewards, {'bonus_price': _.min(discountedPrices)}); 

    // console.log(cheapestPriceIndex, cheapestBonusPriceIndex);

    // console.log(rewards[cheapestBonusPriceIndex].bonus_display_price);
    return cheapestPriceIndex > -1 ? rewards[cheapestPriceIndex].display_price : rewards[cheapestBonusPriceIndex].bonus_display_price;
}

module.exports = {
    getPrice: (id) => {
        return new Promise((resolve, reject) => {
            request('https://store.playstation.com/chihiro-api/viewfinder/US/en/19/' + id + '?size=30&gkb=1&geoCountry=IL', (error, response, body) => {
                if (error) {console.log(error)};
                if (!error && response.statusCode == 200) {
                    let data = JSON.parse(body);
                    
                    let pic = _.first(data.images).url;
                    let name = data.name;

                    let sku = data.default_sku;
                    let hasDiscount = data.default_sku.rewards.length > 0;
                    let price = data.default_sku.display_price;
                    let discountedPrice;

                    if (hasDiscount) {
                         discountedPrice = getDiscountedPrice(data.default_sku.rewards);
                    }

                    return resolve({
                        price,
                        discountedPrice,
                        hasDiscount,
                        name,
                        pic    
                    });
                }
            });
        });
        

    }
};