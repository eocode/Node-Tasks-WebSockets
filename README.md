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
* WebSockets SocketIO

## ORM Commands

Create model and migrations
```bash
sequelize model:generate --name Task --attributes description:text
sequelize model:generate --name User --attributes email:string,password_hash:string
sequelize model:generate --name Category --attributes title:string,color:string
sequelize model:generate --name TaskCategories --attributes taskId:integer,categoryId:integer
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

## Demo

<div align="center">
    <img src="https://github.com/eocode/Node-Tasks-WebSockets/img/demo.png" 
    alt="WebSockets"/>
</div>