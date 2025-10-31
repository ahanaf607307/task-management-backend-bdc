const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  orderId : {type : mongoose.Schema.Types.ObjectId , ref : "Order", required : true },
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  totalAmount : {type : Number , required:true , default : 0},
  paymentType : {type : String , enum : ["payment" , "withdrawal"] , default : ""},
  paymentStatus : {type : String , enum : ["pending" , "completed" , "failed"], default : "pending"}
}, { timestamps: true });

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
