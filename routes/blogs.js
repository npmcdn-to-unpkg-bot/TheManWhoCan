var express = require('express');
var router = express.Router();

var Blog = require('../models/blog');

router.get('/', function(req, res, next){
    // var blog = new Blog({
    //     content: 'Straight from the server yo!',
    //     title: 'Servers Hey'
    // });
    // blog.save(function(err, result){
    //     if(err){
    //         console.log(err);
    //     }
    //     else{
    //         console.log('message saved');
    //     }
    // });
    Blog.find()
        .exec(function(err, docs){
            if(err){
                return res.status(404).json({
                    title: 'An error occured',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: docs
            });
        });
});


module.exports = router;