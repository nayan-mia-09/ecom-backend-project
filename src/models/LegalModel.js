import mongoose from "mongoose"


const DataSchema = mongoose.Schema({
    type: {type: String, require: true},
    description: {type: String, require: true}
},{
    timestamps: true,
    versionKey: false,
});

const LegalModel = mongoose.model("legals", DataSchema);

export default LegalModel;