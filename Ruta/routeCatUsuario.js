var express=require('express');
var router=express.Router();
var CatUsuario=require('../Controller/CatUsuarioController.js');

/*Api listado*/
router.get("/api/listarCatUsuario",CatUsuario.listarCatUsuario);

//registrar
router.post("/api/addCatUsuario",CatUsuario.registrarCatUsuario);

//update
router.put("/api/updateCatUsuario",CatUsuario.updateCatUsuario);

//delete
router.put("/api/deleteCatUsuario",CatUsuario.deleteCatUsuario);

//activate
router.put("/api/activateCatUsuario",CatUsuario.activateCatUsuario);

module.exports=router; 