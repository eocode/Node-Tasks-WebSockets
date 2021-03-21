const sqlite3 = require('sqlite3');
const express = require('express');
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')

const app = express();

app.use(bodyParser.urlencoded({extended: true}))

const sequelize = new Sequelize('c', null, null,{
   dialect: 'sqlite',
   storage: './../backend_project'
});

// let db = new sqlite3.Database('backend_project');

// db.run('CREATE TABLE tasks(id int AUTO_INCREMENT, description varchar(255))');

app.post('/pendientes', function (req, res) {
    // db.run(`INSERT INTO tasks(description) VALUES (?)`, req.body.description);
    res.send('Inserción finalizada');
})

app.listen(4000);

process.on('SIGINT', function () {
    console.log('Adios - Atte. El servidor');
    db.close();
    process.exit();
});