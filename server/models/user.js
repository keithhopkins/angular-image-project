var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');


var userSchema = new Schema({
  username: String,
  password: String,
  stories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'stories'
    }]
});


userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('users', userSchema);
