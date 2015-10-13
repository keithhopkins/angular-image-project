var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose-q')(require('mongoose'));
var User = require('../models/user');
var StoryBoard = require('../models/storyboard');

// get all stories from one user
router.get('/stories', function(req, res, next){
  var sessionID = req.session.passport.user;
  User.findById(sessionID)
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

//post single story to a user
router.post('/stories', function(req, res, next){
  var sessionID = req.session.passport.user;
  var newStory = new StoryBoard(req.body);
  newStory.save();

  var query = sessionID;
  var update = {$push : {stories : newStory}};
  var options = {new : true};

  User.findByIdAndUpdateQ(query, update, options)
  .then(function(result){
    console.log('Successfully updated user');
    res.json(result);
  })
  .catch(function(err){
    console.log('error updating user');
    res.json(err);
  })
  .done();
});

router.put('/stories', function(req, res){
  var query = {title: req.body.title};
  var update = req.body;
  var options = {upsert: true, new: true};
  StoryBoard.findOneAndUpdateQ(query, update, options)
  .then(function(data) {
    res.json(data);
  }).catch(function(err) {
    console.log('story update failed');
    console.log(err);
    res.json({'message': err});
  });
});

router.delete('/stories', function(req, res){
  
});

module.exports = router;
