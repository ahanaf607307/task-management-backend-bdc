const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  service: {  type: [String] , required : true},
  subCategoryId: { type: mongoose.Schema.Types.ObjectId, ref: "SubCategory", required: true },
//   pricePerUnit: { type: Number, default: 0 },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true });

const Service = mongoose.model("Service", serviceSchema);
module.exports = Service;

