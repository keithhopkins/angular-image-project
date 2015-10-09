var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');


var userSchema = new Schema({
  username: String,
  password: String,
  stories: Array
});

var storyBoardSchema = new Schema({
  user: String,
  title: String,
  panels: [{
    imgUrl: String,
    caption: String
  }]
});

userSchema.plugin(passportLocalMongoose);

mongoose.model('users', userSchema);
mongoose.model('stories', storyBoardSchema);



mongoose.connect('mongodb://localhost/storyBoardApp');

// module.exports = mongoose.model('stories', storyBoardSchema)
