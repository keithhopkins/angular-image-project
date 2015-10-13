var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var storyBoardSchema = new Schema({
  title: String,
  panels: [{
    imgUrl: String,
    caption: String
  }]
});





module.exports = mongoose.model('stories', storyBoardSchema);
