import mongoose from "mongoose"




const DataSchema = mongoose.Schema({
      store_id: {type: String, require: true},
      store_password: {type: String, require: true},
      currency: {type: String, require: true},
      success_url: {type: String, require: true},
      fail_url: {type: String, require: true},
      cancel_url: {type: String, require: true},
      ipn_url: {type: String, require: true},
      init_url: {type: String, require: true},
      description: {type: String, require: true},
},{
    timestams: true,
    versionKey: false
});

const PaymentSettingModel = mongoose.model("payment", DataSchema);

export default PaymentSettingModel;