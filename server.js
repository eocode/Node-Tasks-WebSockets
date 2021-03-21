const express = require('express');
const sqlite = require('sqlite3');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const methodOverride = require('method-override');
const session = require('express-session')

const socketio = require('socket.io')

const app = express();

// Routes
const tasksRoutes = require('./routes/tasks_routes');
const registrationRoutes = require('./routes/registration_routes');
const sessionRoutes = require('./routes/sessions.routes')
const categoriesRoutes = require('./routes/categories_routes')

// Middlewares
const findUserMiddleware = require('./middlewares/find_user');
const authUser = require('./middlewares/auth_user');

// Templates
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.set('view engine', 'pug');

// Session
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
app.use(categoriesRoutes)

app.get('/', function (req, res) {
    res.render('home', {user: req.user});
})

let server = app.listen(4000);
let io = socketio(server);
let sockets = {};
let usersCount = 0;

io.on('connection', function (socket) {
    let userId = socket.request._query.loggeduser;
    if (userId) sockets[userId] = socket;

    // Real time users
    usersCount++;
    io.emit('count_updated', {count: usersCount});

    socket.on('new_task', function (data) {
        if (data.userId) {
            let userSocket = sockets[data.userId];
            if (!userSocket) return;
            console.log('Task for user')
            userSocket.emit('new_task', data);
        }
    })

    socket.on('disconnect', function () {
        Object.keys(sockets).forEach(userId => {
            let s = sockets[userId];
            if (s.id == socket.id) sockets[userId] = null;
        });
        usersCount--;
        io.emit('count_updated', {
            count: usersCount
        });
    })
})

const client = require('./realtime/client');