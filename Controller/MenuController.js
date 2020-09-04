var express=require('express');
var router=express.Router();

var pool=require('../Conexion/conexionBD');

/*
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
*/
module.exports={
    addMenu(req,res){
        const sql='call addmenu(?,?,?)';
        const menu={
            idMenu:req.body.idMenu,
            nombre:req.body.nombre,
            tipoMenu:req.body.tipoMenu,
            estado:req.body.estado
        }
        pool.query(sql,[menu.nombre,menu.tipoMenu,menu.estado],err=>{
            if(err){
                throw err;
            }else{
                res.send('ok');
            }
            res.end();
        });
    }
}