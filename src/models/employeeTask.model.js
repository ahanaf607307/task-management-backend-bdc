const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    taskId: { type: mongoose.Schema.Types.ObjectId, ref: "Task", required: true },
    employeeId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    submissionDate: { type: Date },
    submissionProof: { type: String, },
}, { timestamps: true })

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
