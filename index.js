const express = require('express');
const app = express();
const path = require('path');
const staticPath = path.join(__dirname, '/public');
const port = process.env.PORT || 8080;

const search = require('./search');

app.use(express.static(staticPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(staticPath, 'index.html'));
});

app.get('/search', (req, res) => {
    search(req.query.q)
        .then(result => {
            res.send(JSON.stringify(result));
        })
});

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
});