import mongoose from "mongoose";

const DataSchema = mongoose.Schema({
    name: {type: String, require: true, },
    desc: {type: String, require: true},
    image: {type: String, require: true}
},{
    timestamps: true,
    versionKey: false,
})

const FeatureModel = mongoose.model("features", DataSchema);
export default FeatureModel;