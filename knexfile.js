// Update with your config settings.
// https://knexjs.org/#Migrations

if (!global.sails) {
  require('dotenv').config();
}
const migrationConfig = {
  directory: './db/migrations',
};

module.exports = {
  deployment: {
    // deployment configuration here
    seeds: {
      // deployment seed files
    },
  },

  development: {
    client: 'mysql2',
    connection: {
      database: process.env.MYSQL_DB_DATABASE,
      user: process.env.MYSQL_DB_USER,
      password: process.env.MYSQL_DB_PASSWORD,
      host: process.env.MYSQL_DB_HOST,
      port: process.env.MYSQL_DB_PORT,
    },
    migrations: migrationConfig,
    // development seed files
    seeds: {
      directory: ['./db/seeds'],
    },
  },

  testing: {
    client: 'mysql2',
    connection: {
      database: process.env.MYSQL_TEST_DB_DATABASE,
      user: process.env.MYSQL_TEST_DB_USER,
      password: process.env.MYSQL_TEST_DB_PASSWORD,
      port: process.env.MYSQL_TEST_DB_PORT,
      host: process.env.MYSQL_TEST_DB_HOST,
    },
    migrations: migrationConfig,
    seeds: {
      directory: ['./db/seeds', './db/seeds/dev'],
    },
  },
  staging: {
    client: 'mysql2',
    connection: {
      database: process.env.MYSQL_DB_DATABASE,
      user: process.env.MYSQL_DB_USER,
      password: process.env.MYSQL_DB_PASSWORD,
      host: process.env.MYSQL_DB_HOST,
      port: process.env.MYSQL_DB_PORT,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      migrations: migrationConfig,
    },
  },

  production: {
    client: 'mysql2',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};

