var express = require('express');
var router = express.Router();
var goodDetailModel = require('../models/goodDetail');

router.get('/', (req, res) => {
  var { id } = req.query;
  goodDetailModel.findOne({ id }).then((result, err) => {
    if(err){
      res.send({
        msg: "获取商品详情失败",
        status: -1
      });
    }else{
      res.send({
        msg: "获取商品详情成功",
        status: 0,
        data: result
      });
    }
  })
});

module.exports = router;