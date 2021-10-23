const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoUserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    country: {
        type: String
    },
    state: {
        type: String
    },
    city: {
        type: String
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = User = mongoose.model("todoUser", TodoUserSchema)