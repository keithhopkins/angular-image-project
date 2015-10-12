var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose-q')(require('mongoose'));
var User = require('../models/user');
var StoryBoard = require('../models/storyboard');

// get all stories from one user
router.get('/:userid/stories', function(req, res, next){
 User.findById(req.params.userid)
  .populate('stories')
  .exec(function(err, user){
    if(err){
      console.log(err);
    }
    else{
      res.json(user.stories);
    }
  });
});

//post single note to a user
router.post('/:userid/stories', function(req, res, next){
  var newStory = new StoryBoard(req.body);
  newStory.save();

  var id = req.params.userid;
  var update = {$push : {stories : newStory}};
  var options = {new : true};

  User.findByIdAndUpdateQ(id, update, options)
  .then(function(result){
    res.json(result);
  })
  .catch(function(err){
    res.send(err);
  })
  .done();

});
