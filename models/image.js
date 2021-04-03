var mongoose = require('mongoose');
var imageSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  img: { type: String, unique: true }
});
mongoose.set('useCreateIndex', true);
module.exports = mongoose.model('image', imageSchema);