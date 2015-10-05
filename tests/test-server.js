var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/app');
var should = chai.should();

chai.use(chaiHttp);

describe('CRUD', function(){
  Images.collection.drop();
  var id;
  beforeEach(function(done){
    var newImage = new Image({
      imageURL: 'http://i.telegraph.co.uk/multimedia/archive/02841/selfie_2841027b.jpg',

    })
  })
});
