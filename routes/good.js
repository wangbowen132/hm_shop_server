var express = require('express');
var router = express.Router();
var goodMethod = require('../methods/good');
var goodModel = require('../models/good');

/* GET users listing. */
router.post('/saveGood', (req, res) => {
  var { img, price, del, desc } = req.body;
  goodMethod.saveGood({ 
    img, price, del, desc,
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

router.get("/", (req, res) => {
  var { pageIndex } = req.query;
  goodMethod.getGoodTotal().then((result, err) => {
    if(err){
      res.send({
        msg: "获取商品失败",
        status: -1
      });
    }else{
      var total = result;
      goodMethod.getGood(pageIndex).then((result, err) => {
        if(err){
          res.send({
            msg: "获取商品失败",
            status: -1
          });
        }else{
          res.send({
            msg: "获取商品成功",
            status: 0,
            data: result,
            total
          });
        }
      });
    }
  });
});

router.get("/byId", (req, res) => {
  var { id } = req.query;
  goodModel.findOne({ id }).then((result, err) => {
    if(err){
      res.send({
        msg: "获取商品失败",
        status: -1
      });
    }else{
      res.send({
        msg: "获取商品成功",
        status: 0,
        data: result
      });
    }
  })
})

module.exports = router;
