var express = require('express');
var router = express.Router();
var imageMethod = require('../methods/image');

/* GET users listing. */
router.post('/saveImage', (req, res) => {
  var { id, img } = req.body;
  imageMethod.saveImage({ 
    id, img,
    success(){
      res.send({
        msg: "数据传入成功",
        status: 0
      });
    },
    fail(){
      res.send({
        msg: "数据传入失败",
        status: -1
      });
    }
  });
});

router.get("/getImage", (req, res) => {
  imageMethod.getImage().then((result, err) => {
    if(err){
      res.send({
        msg: "获取图片失败",
        status: -1
      });
    }else{
      res.send({
        msg: "获取图片成功",
        status: 0,
        data: result
      });
    }
  });
});

module.exports = router;
