var express = require('express');
var router = express.Router();
var novedadesModel = require('./../models/novedadesModel');

/* GET users listing. */

router.get('/', async function (req, res, next) {
  try{
  var novedades = await novedadesModel.getNovedades();
  res.render('noticias',{
    novedades
  });
}catch(error){
  res.render('error',{
    error
  });
}
});

module.exports = router;
