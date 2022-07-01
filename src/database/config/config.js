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
    "use_env_variable": config.db.production.url,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
  }
}
