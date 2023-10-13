var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");
var contactoModel = require ('../models/contactoModel')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('contacto');
});

router.post('/', async(req, res, next) => {

  console.log(req.body);

  var nombre = req.body.nombre;
  var email = req.body.email;
  var tel = req.body.tel;
  var mensaje = req.body.mensaje;

  var obj = {
    to: 'lyallnicolas@gmail.com',
    subject: 'Contacto Web',
    html: nombre + " se contacto a traves de la web Easypes y quiere mas informacion a este correo : " + email + "<br>Ademas,hizo este comentario : " + mensaje + ". <br> Su tel es: " + tel
  }

  var transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

var info = await transporter.sendMail(obj);
contactoModel.insertContacto(req.body);
  res.render('contacto', {
    message: 'Mensaje enviado correctamente'
  });
});

module.exports = router;
