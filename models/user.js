import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required!'],
  },
  username: {
    type: String,
    required: [true, 'Username is required!'],
    match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
  },
  image: {
    type: String,
  }
});

// models.User ->
// The "models" object is use to stores all the registered models. 
// If a "User" model already exists in the "models" object, it assigns that existing model to "User" variable.
// This prevents redefining the model and ensures that the existing model is reused.

// model("User", UserSchema) -> 
// If a "User" model does not exist in the "models" object, 
// the "model" function is use to create a new model.

const User = models.User || model("User", UserSchema);

export default User;