var jsonListData = [];

const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {

  var jsonfile = require('jsonfile')
  var file = './solar-panel.json';
  jsonfile.readFile(file, function(err, obj) {
    jsonListData = obj.Data;

	var energy = obj.Data.DAY_ENERGY.Value + obj.Data.DAY_ENERGY.Unit;
	res.render('index', { title: 'Solar Panel data' , energy : energy });
 
  });

});

module.exports = router;