const mongoose = require('mongoose');
 
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is Required"],
        minLength: [3, "Name Must Be at Least 3 Characters"]
    },
    age: {
        type: Number
    }
});
 
const User = mongoose.model('User', UserSchema);
 
module.exports = User;