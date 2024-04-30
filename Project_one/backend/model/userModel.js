const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({}, { timestamps: true });

const UserModel = mongoose.model("User", userSchema);

// exporting model
module.exports = UserModel;
