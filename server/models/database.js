var mongoose = require('mongoose-q')(require('mongoose',{spread:true}));
var Schema = mongoose.Schema;

var userSchema = new Schema(){
  user: String,
  email: String,
  stories: Array
}

var storyBoardSchema = new Schema(){
  storyBoard: [{
    imgUrl: String
  }]
};

mongoose.model('users', userSchema);
mongoose.model('stories', storyBoardSchema);

mongoose.connect('mongodb://localhost/storyBoardApp');
module.exports = {
  userSchema: userSchema,
  storyBoardSchema: storyBoardSchema
};
