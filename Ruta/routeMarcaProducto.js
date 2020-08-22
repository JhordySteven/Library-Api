var express=require('express');
var router=express.Router();
var marcaProducto=require('../Controller/marcaProductoController');

/*Api listado*/
router.get("/api/listarMarcaProducto",marcaProducto.listado);

//registrar
router.post("/api/addMarcaProducto",marcaProducto.addMarcaProducto);

//update
router.put("/api/updateMarcaProducto",marcaProducto.updateMarcaProducto);

//delete
router.put("/api/deleteMarcaProducto",marcaProducto.deleteMarcaProducto);

//activate
router.put("/api/activateMarcaProducto",marcaProducto.activateMarcaProducto);

module.exports=router; 