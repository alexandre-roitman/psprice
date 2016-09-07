const app = require('express')();
const search = require('./search');

app.get('/', (req, res) => {
    search(req.query.q)
        .then(result => {
            res.send(JSON.stringify(result));
        })
    
});
app.listen();