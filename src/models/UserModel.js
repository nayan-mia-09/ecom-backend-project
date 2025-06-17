import mongoose from "mongoose";



const DataSchema = mongoose.Schema({
    email: {type: String, require: true, unique: true, lowercase: true},
    otp: {type: String, require: true}
},{
    timestams: true,
    versionKey: false,
});

const UserModel = mongoose.model("users", DataSchema);

export default UserModel;