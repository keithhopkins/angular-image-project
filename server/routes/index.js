var express = require('express');
var router = express.Router();
var key = require('../../_config.js');
var request = require('request');
var mongoose = require('mongoose-q')(require('mongoose'), {spread:true});
var StoryBoard = mongoose.model('stories');
var passport = require('passport');
var User = mongoose.model('users');


router.post('/api/vision', function(req, res){
  var imgUrl = req.body.imgUrl;
  // var imgUrl = 'http://www.online-image-editor.com//styles/2014/images/example_image.png';
  request({
    method: 'GET',
    url: 'http://gateway-a.watsonplatform.net/calls/url/URLGetRankedImageKeywords?url='
          +imgUrl+'&apikey='+key.alchemyKey+'&outputMode=json'
  }, function(err, response){
    if(err){
      console.log('err', err);
      res.json(err);
    } else {
      res.json(response);
    }
  });
});

router.post('/api/instagram', function(req, res) {
  var keyword = req.body.keyword;
  request({
    method: 'GET',
    url: "https://api.instagram.com/v1/tags/" + keyword + "/media/recent?client_id="+key.instagramKey
  }, function(err, response){
    if(err){
      console.log('err', err);
      res.json(err);
    } else {
      res.json(response);
    }
  });
});

// get all storyboards
router.get('/api/storyboard', function(req, res){
  StoryBoard.findQ()
  .then(function(data){
    res.json(data);
  }).catch(function(err){
    res.json({'message': err});
  });
});

// needs title and panels
router.post('/api/storyboard', function(req, res){
  console.log(req.body);
  console.log(req.body.title);
  var query = {title: req.body.title};
  var update = req.body;
  var options = {upsert: true, new: true};
  StoryBoard.findOneAndUpdateQ(query, update, options)
  .then(function(data) {
    console.log('story successfully made/updated');
    res.json(data);
  }).catch(function(err) {
    console.log('story update failed');
    console.log(err);
    res.json({'message': err});
  });
});


// local auth
router.post('/register', function(req, res) {
  User.register(new User({ username: req.body.username }), req.body.password, function(err, account) {
    if (err) {
      return res.status(500).json({err: err});
    }
    passport.authenticate('local')(req, res, function () {
      return res.status(200).json({status: 'Registration successful!'});
    });
  });
});




// http://gateway-a.watsonplatform.net/calls/url/URLGetRankedImageKeywords?url=http://www.online-image-editor.com//styles/2014/images/example_image.png&apikey=dfc8ffa9897e45e8753a1e3c63b1ef1791208403

module.exports = router;
