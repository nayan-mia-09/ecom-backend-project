import mongoose from "mongoose";



const DataSchema = mongoose.Schema({

productId: {type: mongoose.Schema.Types.ObjectId, require: true},
userId: {type: mongoose.Schema.Types.ObjectId, require: true},


qty: {type: String, require: true},
color: {type: String, require: true},
size: {type: String, require: true},
},{
    timestams: true,
    versionKey: false,
});

const CartModel = mongoose.model("carts", DataSchema);

export default CartModel;