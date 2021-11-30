const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "firstname is required"],
    trim: true,
    maxlength: [10],
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, "lastname is required"],
    maxlength: [10], 
  },
  email: {
    type: String,
    trim: true,
    required: [true, "email is required"],
    index: {
      unique: true,
    },
  },

  password: {
    type: String,
    trim: true,
    required: [true, "password is required"],
    select: true,
    minlength: [3, "minmum 3 characters"],
    maxlength: [10, "maximum 10 characters"],
  },

  confirmPassword: {
    type: String,
    trim: true,
    select: true,
    minlength: [3, "minmum 3 characters"],
    maxlength: [10, "maximum 10 characters"],
  },
});

module.exports = mongoose.model("userdata", userSchema)

