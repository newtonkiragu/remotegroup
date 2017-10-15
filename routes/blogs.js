var  express = require('express');

var  router = express.Router();
 
router.get('/blogs', function(req,res, next){
      res.render('blogs');
 });     
 
module.exports = router;
