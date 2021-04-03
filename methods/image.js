var ImageModel = require('../models/image');

function saveImage({ id, img, success, fail }){
  var newImage = new ImageModel({ id, img });
  return newImage.save((err) => {
    if (err){
      fail();
    }else{
      success();
    }
  });
}

function getImage(){
  return ImageModel.find();
}

module.exports = {
  saveImage,
  getImage
}