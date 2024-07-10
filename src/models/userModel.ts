
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Please provide a name"]
    },
    email: {
        type: String,
        require: [true, "Please provide a email"],
        unique: true
    },
    mobile: {
        type: Number,
        require: [true, "Please provide a mobile"],
        unique: true
    },
    password: {
        type: String,
        require: [true, "Please provide a password"]
    }
})

const User = mongoose.models.users || mongoose.model("users", userSchema)
export default User