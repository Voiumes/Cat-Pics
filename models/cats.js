const mongoose = require('mongoose');

let catSchema = new mongoose.Schema({
    name: String,
    image: String,
    isCute: Boolean,
    desc: String,
    comments:
[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
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

module.exports = Cat;