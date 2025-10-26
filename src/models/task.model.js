const mongoose = require("mongoose");
const { toJSON, paginate } = require("./plugins");

const taskSchema = new mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
    subCategoryId: { type: mongoose.Schema.Types.ObjectId, ref: "SubCategory", required: true },
    serviceId: { type: mongoose.Schema.Types.ObjectId, ref: "Service", required: true },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    status: {
      type: String,
      enum: ["active", "inactive", "pending"],
      default: "active",
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Plugins
taskSchema.plugin(toJSON);
taskSchema.plugin(paginate);

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
