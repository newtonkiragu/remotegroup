var  express = require('express');
var  router = express.Router();

var mongojs = require('mongojs');
var db = mongojs('mongodb://admin:admin@ds119685.mlab.com:19685/remoteblog',['blogs']);

//GET blogs  
router.get('/blogs', function(req,res, next){
	db.blogs.find(function(err, blogs){
		if(err){
		   res.send(err);
		}else{
		   res.json(blogs);
		}

         });     
});

//GET single blog
router.get('/blog/:id', function(req,res, next){
	db.blogs.findOne({
	   _id: mongojs.ObjectId(req.params.id)
	
	
	},function(err, blog){
		if(err){
		   res.send(err);
		}else{
		   res.json(blog);
		}

         });     
});
 
// SAVE Blog
router.post('/blog', function(req, res,next){
     var blog = req.body;
     if(!blog.title || !(blog.body + '')){
          res.status(400);
	  res.json({
		  "error": "Invalid Data"
          });
     
     }else {
          db.save(blog, function(err, result){
	      if(err){
		  res.send(err);
	      }else {
	      res.json(result);
              }
	  
	  });
     
     }
});

// UPDATE Blog 

router.put('/blog:id', function(req, res,next){
     var blog = req.body;
     var updObj = {};
     
     if (blog.title){
        updObj.title = blog.title;     
     }
     
     if(blog.body){
         updObj.body = blog.body;

     }

     if(!updObj){
        res.status(400);
	res.json({
	      "error": "Invalid Data"
        });

     } else {
       db.blogs.update({
         _id: mongo.js.ObjectId(req.params.id)
       },updObj, {}, function(err, result){
       
	       if(err) {
	         res.send(err);
	       
	       } else {
	       
	          res.json(result);
	       }
       
       });
     }

});

// DELETE Blog

router.delete('/blog:id', function(req, res,next){
      db.blogs.remove({
         _id: mongo.js.ObjectId(req.params.id)
       },updObj,'', function(err, result){
       
	       if(err) {
	         res.send(err);
	       
	       } else {
	       
	          res.json(result);
	       }
       
       });
 
   });

module.exports = router;
