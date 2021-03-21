'use strict';
const {
    Model
} = require('sequelize');

const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            User.hasMany(models.Task,{
                as: 'tasks'
            });
        }
    };

    User.login = function (email, password) {
        return User.findOne({
            where: {
                email: email
            }
        }).then(user => {
            if (!user) return null;
            return user.autenticatePassword(password).then((valid) => valid ? user : null)
        })
    }

    User.prototype.autenticatePassword = function (password) {
        return new Promise((res, rej) => {
            bcrypt.compare(password, this.password_hash, function (err, valid) {
                if (err) return rej(err);
                res(valid);
            })
        })
    }

    User.init({
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password_hash: DataTypes.STRING,
        password: DataTypes.VIRTUAL
    }, {
        sequelize,
        modelName: 'User',
    });
    User.beforeCreate(function (user, options) {
        return new Promise((res, rej) => {
            if (user.password) {
                bcrypt.hash(user.password, 10, function (error, hash) {
                    user.password_hash = hash;
                    res()
                });
            }
        })
    });
    return User;
};