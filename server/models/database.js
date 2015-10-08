var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  user: String,
  email: String,
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

mongoose.model('users', userSchema);
mongoose.model('stories', storyBoardSchema);

mongoose.connect('mongodb://localhost/storyBoardApp');

// module.exports = mongoose.model('stories', storyBoardSchema)
