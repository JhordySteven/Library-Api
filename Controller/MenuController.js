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
        const sql='call usp_addmenu(?,?,?,?)';
        const menu={
            idMenu:req.body.idMenu,
            nombre:req.body.nombre,
            tipoMenu:req.body.tipoMenu,
            ruta:req.body.ruta,
            estado:req.body.estado
        }
        console.log(menu);
        pool.query(sql,[menu.nombre,menu.tipoMenu,menu.ruta,menu.estado],err=>{
            if(err){
                throw err;
            }else{
                res.send('ok');
            }
            res.end();
        });
    },

    listarMenu(req,res){
        const sql='call usp_listarMenu()';
        pool.query(sql,(error, result)=>{
            if(error){
                throw error;
            }
            if(result.length>0){
                res.send(result);
            }else{
                res.send('not result');
            }
                res.end();
            });
    },
    listarMenuTipo1(req,res){
        const sql='call usp_SelMenu()';
        pool.query(sql,(error, result)=>{
            if(error){
                throw error;
            }
            if(result.length>0){
                res.send(result);
            }else{
                res.send('not result');
            }
                res.end();
            });
    },
    listarSubMenu(req,res){
        const sql='call usp_SelSubMenu()';
        pool.query(sql,(error, result)=>{
            if(error){
                throw error;
            }
            if(result.length>0){
                res.send(result);
            }else{
                res.send('not result');
            }
                res.end();
            });
    },

    updateMenu(req,res){
        const sql='call usp_updateMenu(?,?,?,?,?)';
        const menu={
            idMenu:req.body.idMenu,
            nombre:req.body.nombre,
            tipoMenu:req.body.tipoMenu,
            ruta:req.body.ruta,
            estado:req.body.estado
        }
        console.log(menu);
        pool.query(sql,[menu.idMenu,menu.nombre,menu.tipoMenu,menu.ruta,menu.estado],error=>{
            if(error){
                throw error;
            }else res.send('ok');
            res.end();
        })
    },

    deleteMenu(req,res){
        const sql='call usp_deleteMenu(?)';
        const menu={
            idMenu:req.body.idMenu,
            nombre:req.body.nombre,
            tipoMenu:req.body.tipoMenu,
            ruta:req.body.ruta,
            estado:req.body.estado
        }
        pool.query(sql,[menu.idMenu],error=>{
            if(error){
                throw error;
            }else res.send('ok');
            res.end();
        })
    },
    activateMenu(req,res){
        const sql='call usp_activateMenu(?)';
        const menu={
            idMenu:req.body.idMenu,
            nombre:req.body.nombre,
            tipoMenu:req.body.tipoMenu,
            ruta:req.body.ruta,
            estado:req.body.estado
        }
        pool.query(sql,[menu.idMenu],error=>{
            if(error){
                throw error;
            }else res.send('ok');
            res.end();
        })
    }

}