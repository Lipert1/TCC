import { model, Schema } from "mongoose";

const UserSchema = new Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true}
})

export const User = model("User", UserSchema)
