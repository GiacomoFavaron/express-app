var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ACME Consulting', description: 'Soluciones tecnológicas a medida para su negocio.' });
});

/* GET servicios page. */
router.get('/servicios', function(req, res, next) {
  const services = [
    { name: 'Desarrollo Web', desc: 'Construcción de aplicaciones web modernas.' },
    { name: 'Consultoría IT', desc: 'Asesoría en transformación digital.' },
    { name: 'Soporte y Mantenimiento', desc: 'Planes de soporte 24/7.' }
  ];
  res.render('servicios', { title: 'Servicios - ACME Consulting', services: services });
});

/* GET mejoras page. */
router.get('/mejoras', function(req, res, next) {
  const improvements = [
    'Navegación principal con accesos a secciones',
    'Estilos básicos y diseño responsive',
    'Página de servicios con datos dinámicos'
  ];
  res.render('mejoras', { title: 'Mejoras propuestas', improvements: improvements });
});

module.exports = router;
