'use strict';

// let priceChecker = require('./priceCheck');

// var watched = [
//   {
//     cid: 'UP0006-CUSA04027_00-TITANFALL2RSPWN1'
//   },
//   {
//     cid: 'UP0471-CUSA04046_00-0000000000000ABC'
//   },
//   {
//     cid: 'UP0082-CUSA05794_00-ROTTR00000000001'
//   },
//   {
//     cid: 'UP0082-CUSA04647_00-WORLDOFFFPS40000'
//   }
// ];

// watched.forEach((game) => {
//   priceChecker.getPrice(game.cid).then(printGameData);
// });

// let search = require('./search');
// search('unc').then(results => console.log(results)).then(process.exit());

let getWatchers = require('./getWatchers');

getWatchers().then((data) => {
  console.log(data);
});

// function printGameData(gameData) {
//   console.log(gameData.name);
//   if (gameData.hasDiscount) {
//     console.log('*** has discount ***');
//     console.log('Discounted Price:', gameData.discountedPrice);
//   }
//   console.log('Price:', gameData.price);
//   console.log('-----------------------------------');
// }




// let cid = 'UP0082-CUSA04647_00-WORLDOFFFPS40000';
// let cid = 'UP0082-CUSA05794_00-ROTTR00000000001';
// let cid = 'UP1001-CUSA01512_00-DDBUN10000000000'; //discount
// let cid = 'UP0471-CUSA04046_00-0000000000000ABC'; //discount
// let cid = 'UP8805-CUSA03855_00-ADORABLECATSTHEM'; //cats
// let cid = 'UP2135-NPUB50376_00-LOOTBUNDLEULTIMA'; //discount 
// let cid = 'UP0006-CUSA04027_00-TITANFALL2RSPWN1';

// var price = priceChecker.getPrice(cid).then((gameData) => {
  
// });