
var express=require('express');
var router=express.Router();
const multer = require('multer');
var fs = require('fs');

storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, '../public/foto') // Agregamos el directorio donde se guardarán los archivos.
  },
  filename: function (req, file, cb) {
      cb(null, file.originalname) // Le pasamos el nombre original del archvio, también podriamos cambiar el nombre concatenando la fecha actual.
  }
}),
upload = multer({storage}), // Cambiamos el atributo dest por el storage.

router.post('/api/subir', upload.single('archivo'), error => {
  console.log(req.file) // Nos devuelve un objeto con la información de nuestro archivo
  if(error) {
    throw err;
  }
  else res.send('ok');
})

router.get('/api/verfotos', function(req, res, next) {
  fs.readdir('../archivo/foto', function(err, files) {
    console.log(files);
     res.send(files);        
  });
});

module.exports=router;