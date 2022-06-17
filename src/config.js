require('dotenv').config();

module.exports = {
    port: process.env.PORT,
    jwtSecret: process.env.JWT_SECRET,
    db: {
        development: {
            username: process.env.DB_DEV_USERNAME,
            password: process.env.DB_DEV_PASSWORD,
            database: process.env.DB_DEV_DATABASE,
            dialect: 'postgres',
        },
        test: {
            username: process.env.DB_TEST_USERNAME,
            password: process.env.DB_TEST_PASSWORD,
            database: process.env.DB_TEST_DATABASE,
            dialect: 'mysql',
        },
        production: {
            username: process.env.DB_PROD_USERNAME,
            password: process.env.DB_PROD_PASSWORD,
            database: process.env.DB_PROD_DATABASE,
            host: process.env.DB_PROD_HOST,
            dialect: 'mysql',
        },
    },
};
