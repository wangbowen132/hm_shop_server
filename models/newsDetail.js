var mongoose = require('mongoose');
var newsDetailSchema = mongoose.Schema({
  id: { type: String, unique: true },
  title: String,
  content: String,
  newsTime: String,
  watchCount: Number
});

module.exports = mongoose.model('newsDetail', newsDetailSchema);