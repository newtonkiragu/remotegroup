let  express = require('express');

let path = require('path');
let  bodyParser = require('body-parser');

let index = require('./routes/index');
let blogs = require('./routes/blogs');

let app = express();

// View Engine 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Mapping routes after '/'
app.use('/', index);
app.use('/', blogs);

app.listen(3000, function(){
	console.log('Server started on port 3000');
});
