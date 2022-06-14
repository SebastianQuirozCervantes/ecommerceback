const _ = require('lodash');
const path = require('path');

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'dev';
}

// Search for products with categories according to the search
const env = process.env.NODE_ENV;
module.exports = _.merge(
  require(path.join(__dirname,
    '/default.js')),
  require(path.join(__dirname,
`/${env.trim()}.js`)) || {}
);
