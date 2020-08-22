var express=require('express');
var router=express.Router();
var CatProducto=require('../Controller/CatProductoController.js');

//api listado
router.get('/api/listarCatProducto',CatProducto.listadoCatProducto);

//add
router.post('/api/mntCatProducto',CatProducto.addCatProducto);

//update
router.put('/api/updtCatProducto',CatProducto.updateCatProducto);

//delete
router.put('/api/deleteCatProducto',CatProducto.deleteCatProducto);

//activate
router.put('/api/activeCatProducto',CatProducto.activateCatProducto);

module.exports=router; 