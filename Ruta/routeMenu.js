var express=require('express');
var router=express.Router();
var Menu=require('../Controller/MenuController.js');

//add
router.post('/api/addMenu',Menu.addMenu);

module.exports=router;
