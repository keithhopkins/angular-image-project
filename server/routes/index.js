var express = require('express');
var router = express.Router();
var key = require('../../_config.js');
var request = require('request');
var mongoose = require('mongoose-q')(require('mongoose'), {spread:true});
var StoryBoard = require('../models/storyboard.js');



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
    console.log('GETTING ALL STORIES');
    res.json(data);
  }).catch(function(err){
    res.json({'message': err});
  });
});

router.delete('/api/storyboard', function(req,res){
  StoryBoard.findOneAndRemoveQ(req.body)
  .then(function(result){
    res.json(result);
  })
  .catch(function(err){
    res.send({'ERROR' : err});
  })
  .done();
});

// http://gateway-a.watsonplatform.net/calls/url/URLGetRankedImageKeywords?url=http://www.online-image-editor.com//styles/2014/images/example_image.png&apikey=dfc8ffa9897e45e8753a1e3c63b1ef1791208403

module.exports = router;
