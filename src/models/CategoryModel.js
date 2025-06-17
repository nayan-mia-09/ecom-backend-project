import mongoose from "mongoose";

const DataSchema = mongoose.Schema({
    categoryName: {type: String, require: true, uniqe: true},
    categoryImage: {type: String, require: true},
},{
    timestamps: true,
    versionKey: false,
})

const CategoryModel = mongoose.model("catagorys", DataSchema);
export default CategoryModel;