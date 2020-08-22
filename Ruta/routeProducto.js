var express=require('express');
var router=express.Router();
var Producto=require('../Controller/ProductoController.js');

//listado
router.get('/api/listarProducto',Producto.listarProducto);

//add
router.post('/api/addProducto',Producto.addProducto);

//update
router.put('/api/updateProducto',Producto.updateProducto);

module.exports=router;