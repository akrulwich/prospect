var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'prospect'
    },
    port: 3000,
    db: 'postgres://localhost/prospect'
  },

  test: {
    root: rootPath,
    app: {
      name: 'prospect'
    },
    port: 3000,
    db: 'postgres://localhost/prospect'
  },

  production: {
    root: rootPath,
    app: {
      name: 'prospect'
    },
    port: 3000,
    db: 'postgres://localhost/prospect'
  }
};

module.exports = config[env];
