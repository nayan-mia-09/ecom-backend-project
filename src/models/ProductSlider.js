import mongoose from "mongoose";

const DataSchema = mongoose.Schema({
    title: {type: String, require: true, },
    desc: {type: String, require: true},
    price: {type: String, require: true, },
    image: {type: String, require: true},
    
    productID: {type: mongoose.Schema.Types.ObjectId, require: true}
},{
    timestamps: true,
    versionKey: false,
})

const ProductSliderModel = mongoose.model("produt-slider", DataSchema);
export default ProductSliderModel;