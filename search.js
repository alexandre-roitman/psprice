'use strict';

let request = require('request');
let _ = require('lodash');

module.exports = (query) => {
    return new Promise((resolve, reject) => {
        request(`https://store.playstation.com/store/api/chihiro/00_09_000/tumbler/US/en/19/${query}?suggested_size=5&mode=game`, (err, response, body) => {
            let result = JSON.parse(body);

            let links = result.links;

            var data = links.map((link) => {
                return {
                    id: link.id,
                    image: _.first(link.images).url,
                    title: link.name 
                };
            });

            resolve(data);
        });
    });    
};