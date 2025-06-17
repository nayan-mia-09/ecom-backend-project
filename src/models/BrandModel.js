import mongoose from "mongoose";

const DataSchema = mongoose.Schema({
    brandName: {type: String, require: true, uniqe: true},
    brandImage: {type: String, require: true},
},{
    timestamps: true,
    versionKey: false,
})

const BrandModel = mongoose.model("brands", DataSchema);
export default BrandModel;