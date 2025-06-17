import mongoose from "mongoose";



const DataSchema = mongoose.Schema({

productId: {type: mongoose.Schema.Types.ObjectId, require: true},
userId: {type: mongoose.Schema.Types.ObjectId, require: true},


des: {type: String},
rating: {type: String, require: true},

},{
    timestams: true,
    versionKey: false,
});

const ReviewModel = mongoose.model("invoice-product", DataSchema);

export default ReviewModel;