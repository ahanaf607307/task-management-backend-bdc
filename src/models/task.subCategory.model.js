const mongoose = require("mongoose");

const subcategorySchema = new mongoose.Schema(
  {
    subCategory: { type: [String], required: true },
categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true } ,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const SubCategory = mongoose.model("SubCategory", subcategorySchema);
module.exports = SubCategory;
