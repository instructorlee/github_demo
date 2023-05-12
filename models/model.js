const mongoose = require('mongoose');
 
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is Required"],
        minLength: [3, "Name must be at least 4 characters"]
    },
    age: {
        type: Number
    }
});
 
const User = mongoose.model('User', UserSchema);
 
module.exports = User;