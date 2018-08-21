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
    isCute: Boolean
})

let Cat = mongoose.model("Cat", catSchema);

// Cat.create({
//     name:'Tommy Tabby',
//     image:'https://bit.ly/2BcuomQ'
// }, function(err, cats){
//     if(err){
//         console.log('uh oh');
//     }else{
//         console.log('added tommy tabby');
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
    Cat.find({},function(err, cat){
        if(err){
            console.log('render error line 49')
        }else{
            res.render('cats', {cats:cat});
        }
    })
    
});
app.post('/cats', function(req, res){
    let name = req.body.name;
    let image = req.body.image;
    let newCat = {name: name, image:image};
    cats.push(newCat)
    res.redirect('/cats');
});
app.get('/cats/new', function(req, res){
    res.render('new')
})

app.listen(3000 , function(){
    console.log('app is live')
});;

