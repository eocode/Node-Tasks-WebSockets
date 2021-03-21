# NodeJS APP Practice

In this project I user this tools

* Sequelize ORM: https://sequelize.org
    * SQLite3
* NodeJS 14
    * MVC
    * REST
* Xpress: https://expressjs.com/es/
* AUTH
* Middlewares  
* WebSockets

ORM Commands

Create model and migrations
```bash
sequelize model:generate --name Task --attributes description:text
sequelize model:generate --name User --attributes email:string,password_hash:string
```

Migrate DB structure
```bash
sequelize db:migrate
```

Seeders
```bash
sequelize seed:generate
```

Seeders
```bash
sequelize seed:generate --name generate_tasks
```

```bash
sequelize db:seed:all
sequelize db:seed:undo
sequelize db:seed:undo:all
```