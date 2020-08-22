var express=require('express');
var pool=require('../Conexion/conexionBD');

module.exports={
    registrarUsuarioCliente(req,res){
        const sql="call usp_addUsuarioCliente(?,?,?,?,?,?,?,?)";
        MntUsuarioCliente={
            usuarioId:req.body.usuarioId,
            categoriaUsuId:req.body.categoriaUsuId,
            nombre:req.body.nombre,
            apellido:req.body.apellido,
            usuario:req.body.usuario,
            contrasenia:req.body.contrasenia,
            fechaNacimiento:req.body.fechaNacimiento,
            sexo:req.body.sexo,
            foto:req.body.foto
        };
        pool.query(sql,[MntUsuarioCliente.usuarioId,MntUsuarioCliente.categoriaUsuId,MntUsuarioCliente.nombre,
            MntUsuarioCliente.apellido,MntUsuarioCliente.usuario,MntUsuarioCliente.contrasenia,MntUsuarioCliente.fechaNacimiento,
            MntUsuarioCliente.sexo,MntUsuarioCliente.foto],err=>{
                if(err) throw err;
                else  res.send("ok");
                res.end();
        });
    }
}