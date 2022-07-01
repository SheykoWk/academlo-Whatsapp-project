const config = require('../../config')

module.exports = {
  "development": {
    "username": config.db.development.username,
    "password": config.db.development.password,
    "database": config.db.development.database,
    "host": "127.0.0.1",
    "dialect": config.db.development.dialect
  },
  "test": {
    "username": config.db.test.username,
    "password": config.db.test.password,
    "database": config.db.test.database,
    "host": "127.0.0.1",
    "dialect": config.db.test.dialect
  },
  "production": {
    "use_env_variable":`postgres://oqvgwckkqiuvlt:42c90b477bb791e626f35712ae28c563319854d5a3cf31a63afd0643811f8490@ec2-34-239-241-121.compute-1.amazonaws.com:5432/d1mb8deu1vqp6t`,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
  }
}
