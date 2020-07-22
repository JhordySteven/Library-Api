var express=require('express');
var router=express.Router();
var marcaProducto=require('../Controller/marcaProductoController');

/*Api listado*/
router.get("/api/listarMarcaProducto",marcaProducto.listado);

module.exports=router; 