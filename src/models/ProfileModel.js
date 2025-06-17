import mongoose from "mongoose";



const DataSchema = mongoose.Schema({
    UserID: {type: mongoose.Schema.Types.ObjectId, require: true},

    cust_add: {type: String, require: true},
    cust_city: {type: String, require: true},
    cust_country: {type: String, require: true},
    cust_fax: {type: String, require: true},
    cust_phone: {type: String, require: true},
    cust_name: {type: String, require: true},
    cust_postcode: {type: String, require: true},
    cust_state: {type: String, require: true},

    ship_add: {type: String, require: true},
    ship_city: {type: String, require: true},
    ship_country: {type: String, require: true},
    ship_fax: {type: String, require: true},
    ship_phone: {type: String, require: true},
    ship_name: {type: String, require: true},
    ship_postcode: {type: String, require: true},
    ship_state: {type: String, require: true},


},
{
    timestamps: true,
    versionKey: false
})

const ProfileModel = mongoose.model("profiles", DataSchema);

export default ProfileModel;