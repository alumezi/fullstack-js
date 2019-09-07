const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  displayName: String,
  emails: Array,
  date: Date
});

mongoose.model("users", userSchema)
