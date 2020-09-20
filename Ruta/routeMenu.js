var express=require('express');
var router=express.Router();
var Menu=require('../Controller/MenuController.js');

//add
router.post('/api/addMenu',Menu.addMenu);
//listar
router.get('/api/listarMenu',Menu.listarMenu);
//update
router.put('/api/updateMenu',Menu.updateMenu);
//delete
router.put('/api/deleteMenu',Menu.deleteMenu);
//activate
router.put('/api/activateMenu',Menu.activateMenu);
//listar solo menu
router.get('/api/listMenu',Menu.listarMenuTipo1);
//listar solo Submenu
router.get('/api/listSubMenu',Menu.listarSubMenu);
module.exports=router;
