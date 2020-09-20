var express=require('express');
var pool=require('../Conexion/conexionBD');

module.exports={
  //api listado
  listarCatUsuario(req,res){
    const sql="call usp_selCategoriaUsuario()";
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
  },
  //api registro
  registrarCatUsuario(req,res){
    const sql = 'call usp_addCatUsuario(?,?)';
  const MntCatUsuario = {
    nombre:req.body.nombre,
    estado: req.body.estado,
  };
  console.log(MntCatUsuario);
  pool.query(sql, [MntCatUsuario.nombre,MntCatUsuario.estado], error => {
    if (error) throw error;
    else res.send("ok");
    res.end();
  });
  },

  //api update
  updateCatUsuario(req,res){
    const sql="call usp_updateCatUsuario(?,?,?)";
    const MntCatUsuario = {
      nombre:req.body.nombre,
      estado:req.body.estado,
      categoriaUsuId: req.body.categoriaUsuId,  
    };
    pool.query(sql, [MntCatUsuario.nombre,MntCatUsuario.estado,MntCatUsuario.categoriaUsuId], error => {
      if (error) throw error;
      else res.send('ok');
      res.end();
    });
  },

  //api activate
  activateCatUsuario(req,res){
    const sql="call usp_activarCatUsuario(?)";
    const MntCatUsuario = {
      categoriaUsuId: req.body.categoriaUsuId,
    };
    pool.query(sql, [MntCatUsuario.categoriaUsuId], error => {
      if (error) throw error;
      else res.send('ok');
      res.end();
    });
  },
  
  //api delete
  deleteCatUsuario(req,res){
    const sql="call usp_deleteCatUsuario(?)";
    const MntCatUsuario = {
      categoriaUsuId: req.body.categoriaUsuId,  
    };
    pool.query(sql, [MntCatUsuario.categoriaUsuId],error => {
      if (error) throw error;
      else res.send('ok');
      res.end();
    });
  },

  //add categoriaMenu
  addCategoria_Menu(req,res){
    const sql="call usp_addCategoriaMenu(?,?,?)";
    const CategoriaMenu={
      idMenu:req.body.idMenu,
      categoriaUsu:req.body.categoriaUsu
    }
    pool.query(sql,[CategoriaMenu.idMenu,CategoriaMenu.categoriaUsu],err=>{
      if(err){
        throw err;
      }else res.send('ok');
      res.end();
    });
  }
}


/*var express=require('express');
var router=express.Router();

var pool=require('../Conexion/conexionBD');

//Api listado
router.get("/api/listarCatUsuario",function(req,res){
  const sql="call usp_selCategoriaUsuario()";
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
//Api registro
router.post('/api/mntCatUsuario', (req, res) => {
  const sql = 'call usp_addCatUsuario(?,?)';
  const MntCatUsuario = {
    nombre:req.body.nombre,
    estado: req.body.estado,
  };
  console.log(MntCatUsuario);
  pool.query(sql, [MntCatUsuario.nombre,MntCatUsuario.estado], error => {
    if (error) throw error;
    else res.send("ok");
    res.end();
  });
});

//api update
router.put('/api/updtCatUsuario',(req,res)=>{
  const sql="call usp_updateCatUsuario(?,?,?)";
  const MntCatUsuario = {
    nombre:req.body.nombre,
    estado:req.body.estado,
    categoriaUsuId: req.body.categoriaUsuId,  
  };
  pool.query(sql, [MntCatUsuario.nombre,MntCatUsuario.estado,MntCatUsuario.categoriaUsuId], error => {
    if (error) throw error;
    else res.send('ok');
    res.end();
  });
})

//api activar
router.put('/api/activeCatUsuario',(req,res)=>{
  const sql="call usp_activarCatUsuario(?)";
  const MntCatUsuario = {
    categoriaUsuId: req.body.categoriaUsuId,
  };
  pool.query(sql, [MntCatUsuario.categoriaUsuId], error => {
    if (error) throw error;
    else res.send('ok');
    res.end();
  });
})
//api delete
router.put('/api/deleteCatUsuario',(req,res)=>{
  const sql="call usp_deleteCatUsuario(?)";
  const MntCatUsuario = {
    categoriaUsuId: req.body.categoriaUsuId,  
  };
  pool.query(sql, [MntCatUsuario.categoriaUsuId],error => {
    if (error) throw error;
    else res.send('ok');
    res.end();
  });
})
module.exports=router;*/