var express=require('express');
var router=express.Router();

var pool=require('../Conexion/conexionBD');

/*Api listado*/
router.get("/api/listarCatProducto",function(req,res){
  const sql="call usp_selCatProducto()";
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
router.post('/api/mntCatProducto', (req, response) => {
  const sql = 'call usp_insertarCatProducto(?,?)';
  const MntCatProduct = {
    nombre:req.body.nombre,
    estado: req.body.estado,
  };
  pool.query(sql, [MntCatProduct.nombre,MntCatProduct.estado], error => {
    if (error) throw error;
    else res.send("ok");
    res.end();
  });
});

/*api update */
router.put('/api/updtCatProducto',(req,res)=>{
  const sql="call usp_updateCatProducto(?,?,?)";
  const MntCatProduct = {
    nombre:req.body.nombre,
    estado:req.body.estado,
    categoriaId: req.body.categoriaId,  
  };
  pool.query(sql, [MntCatProduct.nombre,MntCatProduct.estado,MntCatProduct.categoriaId], error => {
    if (error) throw error;
    else res.send('ok');
    res.end();
  });
})

/*api activar */
router.put('/api/activeCatProducto',(req,res)=>{
  const sql="call usp_activarCatProducto(?)";
  const MntCatProduct = {
    categoriaId: req.body.categoriaId,
  };
  console.log(MntCatProduct);
  pool.query(sql, [MntCatProduct.categoriaId], error => {
    if (error) throw error;
    else res.send('ok');
    res.end();
  });
})
/*api delete */
router.put('/api/deleteCatProducto',(req,res)=>{
  const sql="call usp_deleteCatProducto(?)";
  const MntCatProduct = {
    categoriaId: req.body.categoriaId,  
  };
  pool.query(sql, [MntCatProduct.categoriaId],error => {
    if (error) throw error;
    else res.send('ok');
    res.end();
  });
})
module.exports=router;