//connect to firebase

module.exports = () => {
    return new Promise((resolve, reject) => {
        resolve({
            user1: [
                {
                    gameId: 'gameId',
                    maxPrice: 20
                },
                {
                    gameId: 'gameId',
                    maxPrice: 10
                }
            ],
            user2: [
                {
                    gameId: 'gameId',
                    maxPrice: 10
                }
            ]
        });
    }) 
};