var pool=require('../Conexion/conexionBD');

module.exports={

    //Api listado
    listado(req,res){
        const sql="call usp_selMarcaProducto()";
        pool.query(sql,function(err,resp){
        if(err){
            throw err;
        }
        if(resp.length>0){
        res.send(resp);
        }else{
        res.send('not result');
        }
        res.end();
        });
    },

    //registrar marcaProducto
    addMarcaProducto(req,res){
        const sql="call usp_addMarcaProductp(?,?)";
        const MntMarca={
            marcaProductoId:req.body.marcaProductoId,
            nombre:req.body.nombre,
            estado:req.body.estado
        }
        pool.query(sql,[MntMarca.nombre,MntMarca.estado],err=>{
            if (err) throw err;
            else res.send('ok');
            res.end();
        })
    },

    //update MarcaProducto
    updateMarcaProducto(req,res){
        const sql="call usp_updateMarcaProducto(?,?,?)";
        const MntMarca={
            marcaProductoId:req.body.marcaProductoId,
            nombre:req.body.nombre,
            estado:req.body.estado
        }
        pool.query(sql,[MntMarca.marcaProductoId,MntMarca.nombre,MntMarca.estado],err=>{
            if (err) throw err;
            else res.send('ok');
            res.end();
        })
    },

    activateMarcaProducto(req,res){
        const sql="call usp_activateMarcaProducto(?)";
        const MntMarca={
            marcaProductoId:req.body.marcaProductoId,
            nombre:req.body.nombre,
            estado:req.body.estado
        }
        pool.query(sql,[MntMarca.marcaProductoId,MntMarca.nombre,MntMarca.estado],err=>{
            if (err) throw err;
            else res.send('ok');
            res.end();
        })
    },

    deleteMarcaProducto(req,res){
        const sql="call usp_deleteMarcaProducto (?)";
        const MntMarca={
            marcaProductoId:req.body.marcaProductoId,
            nombre:req.body.nombre,
            estado:req.body.estado
        }
        pool.query(sql,[MntMarca.marcaProductoId,MntMarca.nombre,MntMarca.estado],err=>{
            if (err) throw err;
            else res.send('ok');
            res.end();
        })
    }
}





/*
var express=require('express');
var router=express.Router();

var pool=require('../Conexion/conexionBD');

//Api listado
router.get("/api/listarMarcaProducto",function(req,res){
    const sql="call usp_selMarcaProducto()";
    pool.query(sql,function(err,resp){
    if(err){
        throw err;
    }
    if(resp.length>0){
      res.send(resp);
    }else{
      res.send('not result');
    }
    res.end();
})
});

router.post("/api/addMarcaProducto",(req,res)=>{
    const sql="call usp_addMarcaProductp(?,?)";
    const MntMarca={
        marcaProductoId:req.body.marcaProductoId,
        nombre:req.body.nombre,
        estado:req.body.estado
    }
    pool.query(sql,[MntMarca.nombre,MntMarca.estado],err=>{
        if (err) throw err;
        else res.send('ok');
        res.end();
    })
});

router.put("/api/updateMarcaProducto",(req,res)=>{
    const sql="call usp_updateMarcaProducto(?,?,?)";
    const MntMarca={
        marcaProductoId:req.body.marcaProductoId,
        nombre:req.body.nombre,
        estado:req.body.estado
    }
    pool.query(sql,[MntMarca.marcaProductoId,MntMarca.nombre,MntMarca.estado],err=>{
        if (err) throw err;
        else res.send('ok');
        res.end();
    })
});

router.put("/api/activateMarcaProducto",(req,res)=>{
    const sql="call usp_activateMarcaProducto(?)";
    const MntMarca={
        marcaProductoId:req.body.marcaProductoId,
        nombre:req.body.nombre,
        estado:req.body.estado
    }
    pool.query(sql,[MntMarca.marcaProductoId,MntMarca.nombre,MntMarca.estado],err=>{
        if (err) throw err;
        else res.send('ok');
        res.end();
    })
});

router.put("/api/deleteMarcaProducto",(req,res)=>{
    const sql="call usp_deleteMarcaProducto (?)";
    const MntMarca={
        marcaProductoId:req.body.marcaProductoId,
        nombre:req.body.nombre,
        estado:req.body.estado
    }
    pool.query(sql,[MntMarca.marcaProductoId,MntMarca.nombre,MntMarca.estado],err=>{
        if (err) throw err;
        else res.send('ok');
        res.end();
    })
});
module.exports=router; */