const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  taskId : {type : mongoose.Schema.Types.ObjectId , ref : "Task", required : true },
  clientId: { type: mongoose.Schema.Types.ObjectId, ref: "User",required : true },
  serviceId: { type: mongoose.Schema.Types.ObjectId, ref: "Service",required : true },
  quantity : {type : Number , required:true, default : 1},
  addLink : {type : String , required:true},
  totalPayable : {type : Number , required:true},
  paymentStatus : {type : String , enum : ["pending" , "accepted"], default : "pending"}
}, { timestamps: true });

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
