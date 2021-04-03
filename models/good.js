var mongoose = require('mongoose');
var goodSchema = mongoose.Schema({
  img: { type: String, unique: true },
  price: Number,
  del: Number,
  desc: String
});
mongoose.set('useCreateIndex', true);
module.exports = mongoose.model('good', goodSchema);