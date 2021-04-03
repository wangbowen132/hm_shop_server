var express = require('express');
var router = express.Router();
var newsDetailModel = require('../models/newsDetail');

router.get('/', (req, res) => {
  var { id } = req.query;
  newsDetailModel.findOne({ id }).then((result, err) => {
    if(err){
      res.send({
        msg: "获取详情失败",
        status: -1
      });
    }else{
      res.send({
        msg: "获取详情成功",
        status: 0,
        data: result
      });
    }
  })
});

module.exports = router;