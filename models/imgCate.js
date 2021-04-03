var mongoose = require('mongoose');
var imgCateSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  title: String
});
mongoose.set('useCreateIndex', true);
module.exports = mongoose.model('imageCategory', imgCateSchema);