
var express=require('express');
var router=express.Router();

var pool=require('../Conexion/conexionBD');

router.get("/api/listarMenu",function(param,res){
    pool.query("select * from tb_menu",function(err,resp){
    if(err){
        throw err;
    }
    res.write(JSON.stringify(resp));
    res.end();
})
})

module.exports=router;