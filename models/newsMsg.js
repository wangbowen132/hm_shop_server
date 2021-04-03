var mongoose = require('mongoose');
var newsMsgSchema = mongoose.Schema({
  id: { type: String, unique: true },
  title: String,
  url: String,
  newsTime: String,
  watchCount: Number
});
mongoose.set('useCreateIndex', true);

module.exports = mongoose.model('newsMsg', newsMsgSchema);