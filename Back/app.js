
var express=require('express');
var app=express();
var path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//cors permisos
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

//Verificación de fotos en el server
const staticRoute = path.join(__dirname, '../public/imagenes')
app.use('/sources', express.static(staticRoute))

//invocación de metodo de rutas
var catProducto=require('../Ruta/routecatProducto');
var marca=require('../Ruta/routeMarcaProducto');
var subirfoto=require('../Controller/subirFotoController');
var producto=require('../Ruta/routeProducto');
var catUsuario=require('../Ruta/routeCatUsuario');
var usuario=require('../Ruta/routeUsuario');
var menu=require('../Ruta/routeMenu');

//var docente=require('../Controller/MenuController');
app.use(catProducto);
app.use(marca);
app.use(subirfoto);	
app.use(producto);
app.use(catUsuario);
app.use(usuario);
app.use(menu);
//app.use(docente);

//creación del server
app.listen(8888,function(error,res){
	if(error) throw error;
	else console.log("servidor corriendo perfectamente");
});