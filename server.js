const express = require('express');
const sqlite = require('sqlite3');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const methodOverride = require('method-override');
const session = require('express-session')

const app = express();

const tasksRoutes = require('./routes/tasks_routes');
const registrationRoutes = require('./routes/registration_routes');
const sessionRoutes = require('./routes/sessions.routes')
const findUserMiddleware = require('./middlewares/find_user');
const authUser = require('./middlewares/auth_user');

app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.set('view engine', 'pug');

app.use(session({
    secret: ['12ffdsfasdfasdfsdf', '123fsdfsadfasdfsdfsdfsfasd'],
    saveUninitialized: false,
    resave: false
}))

app.use(findUserMiddleware);
app.use(authUser);

app.use(tasksRoutes);
app.use(registrationRoutes);
app.use(sessionRoutes);

app.get('/', function (req, res) {
    res.render('home', {user: req.user});
})

app.listen(4000);