
var express=require('express');
var app=express();
var path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});


const staticRoute = path.join(__dirname, '../archivo/foto')
app.use('/sources', express.static(staticRoute))

var docente=require('../Controller/MenuController');
var rol=require('../Controller/catProductoController');
//var marca=require('../Controller/marcaProductoController');
var marca=require('../Ruta/routeMarcaProducto');
var subirfoto=require('../Controller/subirFotoController');
var producto=require('../Controller/productoController');
var catUsuario=require('../Controller/catUsuarioController');
app.use(marca);
app.use(docente);
app.use(rol);
app.use(subirfoto);	
app.use(producto);
app.use(catUsuario);

app.listen(8888,function(error,res){
	if(error) throw error;
	else console.log("servidor corriendo perfectamente");
});