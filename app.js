var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var expressValidator = require('express-validator');
var mongojs = require('mongojs');
var db = mongojs('mongodb://mkshuvo:iamshuvo123@ds259144.mlab.com:59144/customerapp', ['users'])
var ObjectId = mongojs.ObjectID;
var app = express();
//view engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//bodyparser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//set static path 
app.use(express.static(path.join(__dirname, 'public')))


//global variables
app.use((req,res, next)=>{
  res.locals.errors = null;
  //res.locals.updateInfo = null
  next();
})
//validator middleware
app.use(expressValidator({
  errorFormatter : (param, msg, value) =>{
    var namespace = param.split('.')
                    , root = namespace.shift()
                    , formParam = root;

    while(namespace.length){
      formParam += '['+namespace.shift() +']';
    }
    return{
      param : formParam,
      msg : msg,
      value : value
    };

  }
}));


// var user = [
//   {
//     id: 1,
//     first_name: 'Jhon',
//     last_name: 'Doe',
//     email: 'johndoe@gmail.com'  
//   },
//   {
//     id: 2,
//     first_name: 'Bob',
//     last_name: 'Smith',
//     email: 'bob@gmail.com'  
//   },
//   {
//     id: 3,
//     first_name: 'Jill',
//     last_name: 'Jackson',
//     email: 'jill@gmail.com'  
//   },
// ]

app.get('/',(req,res)=>{
    db.users.find((err,docs)=>{
        //console.log(docs);
        res.render('index',{
          title : 'customer',
          users: docs
        });
    })
    //var title  = 'customers';
})

app.post('/users/add',(req,res)=>{

  req.checkBody('first_name','First name is required').notEmpty();
  req.checkBody('last_name','Last name is required').notEmpty();
  req.checkBody('email','Email is required').notEmpty();

  var errors = req.validationErrors();

  if(errors){
    res.render('index',{
      title : 'customer',
      users: user,
      errors : errors
    });
  }else{
      var newUser = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
      }
      db.users.insert(newUser, (err, result)=>{
        if(err){
          console.log(err);
        }
        res.redirect('/');
      })
      console.log('success');
  }
})

app.delete('/users/delete/:id',(req,res)=>{
  console.log(req.params.id)

  db.users.remove({_id: ObjectId(req.params.id)},(err,result)=>{
    if(err){
      console.log(err);
    }
    res.redirect('/');
  });
});
//get request for update
app.get('/update/:id',(req,res)=>{
  db.users.findOne({
    _id: ObjectId(req.params.id)
  }, function(err, doc) {
    console.log(doc);
    res.render('update',{
      title: 'Update',
      users : doc
    });
  })
  
});

//put request for update
app.put('/update/:id',(req, res)=>{
  console.log(req.params.id)
  var updatedInfo = {
    first_name: req.params.first_name,
    last_name: req.params.last_name,
    email: req.params.email
  }
  db.users.findAndModify({
    query: { _id: ObjectId(req.params.id) },
    update: { $set: { updatedInfo } },
    new: true
  }, function (err, doc, lastErrorObject) {
    if(err){
      console.log(err);
    }
    res.redirect('/');
  })
});
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('running at http://' + host + ':' + port);
});