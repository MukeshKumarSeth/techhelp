var mongoose = require('mongoose');
let validator = require('validator');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name:  {type:String,  minlength: 3,
    maxlength: 50},
  email: {
    type: String,
    required: 'Email field is required',
    unique: true,
    lowercase: true,
    validate: (value) => {
      return validator.isEmail(value)
    }
  },
  password:{type: String,
    required: true,},
  address:String,
  city:String,
  state:String,
  zip:{type: Number,
    required: true,},
  gender:Number,
  del_status:{ type: Number, default:0},
  updated_at: { type: Date},
  created_at: { type: Date, default: Date.now },
});

var User = mongoose.model('User', userSchema);

module.exports={
    User
}