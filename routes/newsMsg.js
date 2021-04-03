var express = require('express');
var router = express.Router();
var newsMsgModel = require('../models/newsMsg');

router.get('/', (req, res) => {
  var { pageIndex } = req.query;
  newsMsgModel.find().skip(10 * (pageIndex - 1)).limit(10).then((result, err) => {
    if(err){
      res.send({
        msg: "获取资讯失败",
        status: -1
      });
    }else{
      res.send({
        msg: "获取资讯成功",
        status: 0,
        data: result
      });
    }
  });
});

module.exports = router;