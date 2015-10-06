var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/app');
var should = chai.should();

chai.use(chaiHttp);


describe('CRUD', function() {


  Images.collection.drop();
  var id;


  beforeEach(function(done) {
    var newImage = new Image({
      imageURL: 'http://i.telegraph.co.uk/multimedia/archive/02841/selfie_2841027b.jpg'
    });
    id = newImage._id;
    newImage.save(function(err) {
      done();
    });
  });
  afterEach(function(done) {
    Images.collection.drop();
    done();
  });


  it('should list ALL blobs on /blobs GET');
  it('should list a SINGLE blob on /blob/<id> GET');
  it('should add a SINGLE blob on /blobs POST');
  it('should update a SINGLE blob on /blob/<id> PUT');
  it('should delete a SINGLE blob on /blob/<id> DELETE');
});

