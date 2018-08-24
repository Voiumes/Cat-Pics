const mongoose = require('mongoose');
const Cat = require('./models/cats.js');
const Comment = require('./models/comments.js')

let data = [
    {
        name: 'Paws',
        image: 'https://bit.ly/2OZmA9S',
        isCute: true,
        desc: 'HUEHEUHEUEH'
  
    },
    {
        name: 'Whiskers',
        image: 'https://bit.ly/2PwmuaK',
        isCute: true,
        desc: 'I POOP D PANTS'

    },
    {
        name: 'Paws',
        image: 'https://bit.ly/2MPvZmU',
        isCute: true,
        desc: 'OWOIHDOAFNV'

    }
]
let commentData = [
 
]


function seedDb(){
        Cat.remove({},function(err){
        if(err){

        }else{
            console.log('removed')
            data.forEach(function(seed){
                Cat.create(seed,function(err, cats){
                    if(err){
                        console.log('error seeds.js line 37')
                    }else{
                        console.log('added cat')
                        Comment.create(
                            {
                                title: 'This cat is cute!!',
                                 author: 'Brad Traversy',
                            }, function(err, comment){
                                    if(err){
                                        
                                    }else{
                                        cats.comments.push(comment)
                                        cats.save()

                                        console.log('Created a new comment')
                            }
                        })
                    }
                })
            })
        }
    })
       
}

module.exports = seedDb;