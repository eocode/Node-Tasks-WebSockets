const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use('/assets', express.static('assets', {
    etag: false, // identificador único de recurso
    maxAge: '5h' // zeit/ms JS
}));

app.get('/', function (req, res) {
    res.render('index');
    // res.sendFile('index.html', {
    //     root: __dirname
    // })
})

app.listen(4000)