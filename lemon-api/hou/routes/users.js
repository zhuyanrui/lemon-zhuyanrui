var express = require('express');
var router = express.Router();
var userapi = require("./user/index");
//添加用户
router.post("/", userapi.adduser);
//查询用户是否存在

/* GET users listing. */
// router.get('/', function(req, res, next) {
//     res.send('respond with a resource');
// });

module.exports = router;