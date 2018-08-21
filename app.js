const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/cat_app");
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

let catSchema = new mongoose.Schema({
    name: String,
    image: String,
    isCute: Boolean,
    desc: String
})

let Cat = mongoose.model("Cat", catSchema);

// Cat.create({
//     name:'Voiumes',
//     image:'https://images.unsplash.com/photo-1489084917528-a57e68a79a1e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=43cb78de7049ab49aaa8b6ce363b8986&auto=format&fit=crop&w=500&q=60',
//     isCute: true,
//     desc: "Enable MongoDBs free cloud-based monitoring service to collect and displa metrics about your deployment (disk utilization, CPU, operation statistics,etc)."
// }, function(err, cats){
//     if(err){
//         console.log('uh oh');
//     }else{
//         console.log('added voiumes');
//     }
// })


// let cats = [
//     {name:'Tommy Tabby', image:'https://bit.ly/2BcuomQ'},
//     {name:'Paws', image:'https://bit.ly/2w5rn1K'},
//     {name:'Whiskers', image:'https://bit.ly/2MR0k1a'}
// ];

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
    Cat.findById(req.params.id , function(err, showcat){
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

