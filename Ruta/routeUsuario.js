
var express=require('express');
var router=express.Router();
var Usuario=require('../Controller/usuarioController.js');

//api listado
router.post('/api/registrarUsuarioCliente',Usuario.registrarUsuarioCliente);

module.exports=router;