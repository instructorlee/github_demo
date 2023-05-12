const mongoose = require('mongoose');
 
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minLength: [3, "Name must be at least 3 characters"]
    },
    age: {
        type: Number
    }
});
 
const User = mongoose.model('User', UserSchema);
 
module.exports = User;