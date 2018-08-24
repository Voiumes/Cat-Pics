const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Cat = require('./models/cats');
const Comment = require ('./models/comments.js')
const seedDb = require('./seeds');

mongoose.connect("mongodb://localhost/catcamp");
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');


// seedDb();
app.get('/', function(req, res){
    res.render('landing');
})
app.get('/cats', function(req, res){
    Cat.find({},function(err, gallerycat){
        if(err){
            console.log('render error line 49')
        }else{
            res.render('index', {cats:gallerycat});
        }
    })
    
});
app.post('/cats', function(req, res){
    let name = req.body.name;
    let image = req.body.image;
    let description = req.body.desc;
    let isCute = req.body.isCute;
    let newCat = {name: name, image:image, desc:description, isCute:isCute};
    Cat.create(newCat, function(err, created){
        if(err){
            console.log('error trying to add new cat')
        }else{
            res.redirect('/cats')
        }
    })
   
});
app.get('/cats/new', function(req, res){
    res.render('new')
})
app.get('/cats/:id', function(req, res){
    Cat.findById(req.params.id).populate('comments').exec(function(err, showcat){
        if(err){
            console.log('error line 70')
        }else{
            res.render('show', {cat: showcat})
        }
    })
});

app.listen(4000 , function(){
    console.log('app is live')
});;

