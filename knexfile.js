// Update with your config settings.
const path = require('path');
const BASE_PATH = path.join(__dirname);

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'postgres',
      user:     'postgres',
      password: 'admin'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: path.join(BASE_PATH,'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH,'seeds')
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'test',
      user:     'postgres',
      password: 'root'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
