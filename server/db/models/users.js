const mongoose = require('mongoose');

const users = new mongoose.Schema({
    firstName : String,
    lastName : String,
    email : String,
    password : String,
    password_token: String,
    image : String,
    user_type : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user_types",
    }
});


module.exports = mongoose.model("users", users);