var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var storyBoardSchema = new Schema({
  user: String,
  title: String,
  panels: [{
    imgUrl: String,
    caption: String
  }]
});





module.exports = mongoose.model('stories', storyBoardSchema);
