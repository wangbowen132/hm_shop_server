var mongoose = require('mongoose');
var cateImgSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  date: String,
  title: String
});
mongoose.set('useCreateIndex', true);
module.exports = mongoose.model('cateImg', cateImgSchema);