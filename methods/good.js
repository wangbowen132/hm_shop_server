var goodModel = require('../models/good');
 
function saveGood({ img, price, del, desc, success, fail }){
  var newImage = new goodModel({ img, price, del, desc });
  return newImage.save((err) => {
    if (err){
      fail();
    }else{
      success();
    }
  });
}

function getGood(pageIndex){
  return goodModel.find().skip(8 * (pageIndex - 1)).limit(8);
}

function getGoodTotal(){
  return goodModel.count();
}

module.exports = {
  saveGood,
  getGood,
  getGoodTotal
}