var express = require('express');
var router = express.Router();
var imgCateModel = require("../models/imgCate")


router.get("/", (req, res) => {
  imgCateModel.find().then((result, err) => {
    if(err){
      res.send({
        msg: "获取分类失败",
        status: -1
      });
    }else{
      res.send({
        msg: "获取分类成功",
        status: 0,
        data: result
      });
    }
  });
});

module.exports = router;