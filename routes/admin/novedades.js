var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/novedades',{
    // establece un layout diferente
    layout: 'admin/layout',
    //define la variable usuario que se pasa al render de admin/novedades
    usuario: req.session.nombre,
  });
});

module.exports = router;