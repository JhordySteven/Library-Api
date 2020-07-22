var express=require('express');
var router=express.Router();

var pool=require('../Conexion/conexionBD');

/*Api listado*/
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
/*Api registro */
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

/*api update */
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

/*api activar */
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
/*api delete */
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
module.exports=router;