import { Schema, model, models } from "mongoose";


const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    username: {
        type: String,
        unique: [true, "Username already exists!"],
        required: [true, "username is required"],
        match: [/^(?=.{8,200}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },
    image: {
        type: String,
    }

});

const User = models.User || model("User", UserSchema);

export default User;