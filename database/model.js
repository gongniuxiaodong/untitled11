var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/test',{useMongoClient:true});
var Schema = mongoose.Schema;
//骨架模版
var userSchema = new Schema({
    username   : String,
    password   : String,
})



var User = mongoose.model('User', userSchema);
module.exports = User;