var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var storyBoardSchema = new Schema({
  user: String,
  title: String,
  panels: [{
    imgUrl: String,
    caption: String
  }],
  createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
});





module.exports = mongoose.model('stories', storyBoardSchema);
