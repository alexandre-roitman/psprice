//connect to firebase

const firebase = require("firebase");
// var config = require('./config');
// console.log(require('./config'));


module.exports = () => {
    return new Promise((resolve, reject) => {
        // firebase.initializeApp({
        //     serviceAccount: './psdb.json',
        //     databaseURL: 'https://ps-price.firebaseio.com/'
        // });

        // var db = firebase.database(); 
        // var ref = db.ref();
        // ref.once(snapshot => {
        //     resolve(snapshot.value());
        // });

        // ref.on("value", function(snapshot) {
        //     console.log(snapshot.val());
        // }, function (errorObject) {
        //     console.log("The read failed: " + errorObject.code);
        // });


        resolve({
            "uid" : {
                "email" : "kaspi.amit@gmail.com",
                "tracking" : {
                    "gid1" : 20,
                    "gid2" : 10
                }
            },
            "uid2" : {
                "email" : "alexandrer@gmail.com",
                "tracking" : {
                    "gID2" : 17
                }
            }
        });
    });
};