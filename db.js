const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');

const db = low(adapter);
// Set some defaults (required if your JSON file is empty)
db.defaults({ users: [] })
  .write(); // sai o cho nay, sua 4 dau cach --> 2 dau cach

  module.exports = db;