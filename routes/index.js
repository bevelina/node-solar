// Json list data array for filling in info box
var jsonListData = [];

const express = require('express');
const router = express.Router();
// Functions =============================================================

/* GET home page. */
router.get('/', function(req, res, next) {

  var jsonfile = require('jsonfile')
  var file = './solar-panel.json';
  jsonfile.readFile(file, function(err, obj) {
    jsonListData = obj.Data;
  console.dir(obj.Data.DAY_ENERGY.Value);

  // Inject the whole content string into jade
  var energy = obj.Data.DAY_ENERGY.Value + obj.Data.DAY_ENERGY.Unit;
    res.render('index', { title: 'Solar Panel data' , energy : energy });
 

  });

  
   
});

module.exports = router;