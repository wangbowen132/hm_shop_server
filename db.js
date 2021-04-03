var mongoose = require("mongoose");
function connect(){
  mongoose.connect('mongodb://localhost/hm_shop', {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  });
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log("数据库连接成功");
  }); 
}


module.exports = {
  connect
}