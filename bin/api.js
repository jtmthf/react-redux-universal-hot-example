#!/usr/bin/env node
if (process.env.NODE_ENV !== 'production') {
  require('../api/api');
} else {
  require('babel-polyfill');
  require('./api/api');
}
