var mongoose = require('mongoose');
var goodDetailSchema = mongoose.Schema({
  title: String,
  img: Array,
  info: String,
  "info-img": Array,
  id: { type: String, unique: true}
});
mongoose.set( 'useCreateIndex', true );
module.exports = mongoose.model("goodDetail", goodDetailSchema);