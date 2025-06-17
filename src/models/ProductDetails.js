import mongoose from "mongoose";

const DataSchema = mongoose.Schema({
    image1: {type: String, require: true, },
    image2: {type: String, require: true},
    image3: {type: String, require: true, },
    image4: {type: String, require: true},
    image5: {type: String },
    image6: {type: String },
    image7: {type: String },
    image8: {type: String },
    desc: {type: String , require: true},
    color: {type: String, require: true},
    size: {type: String , require: true},
    productID: {type: mongoose.Schema.Types.ObjectId, require: true},
    
},{
    timestamps: true,
    versionKey: false,
})

const ProductdDetailsModel = mongoose.model("produt-details", DataSchema);
export default ProductdDetailsModel;