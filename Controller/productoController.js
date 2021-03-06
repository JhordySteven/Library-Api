var express=require('express');
var router=express.Router();

var pool=require('../Conexion/conexionBD');

/*Api listado*/
router.get("/api/listarProducto",function(req,res){
  const sql="call usp_selProducto()";
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

//registrar
router.post('/api/addProducto',(req,res)=>{
const sql="call usp_addProducto(?,?,?,?,?,?)";
const MntProducto = {
  productoId:req.body.productoId,
  categoriaId:req.body.categoriaId,
  nombre:req.body.nombre,
  precioUnidad:req.body.precioUnidad,
  stock:req.body.stock,
  foto:req.body.foto,
  marcaProductoId:req.body.marcaProductoId,
  estado: req.body.estado,
};
console.log(MntProducto);
pool.query(sql,[MntProducto.categoriaId,MntProducto.nombre,MntProducto.precioUnidad,
                MntProducto.stock,MntProducto.foto,MntProducto.marcaProductoId],error=>{
  if (error) throw error;
  else res.send("ok");
  res.end();
});
})


module.exports=router;