const { TransactionModel } = require("../models");
const Order = require("../models/order.model");

const createTransaction = async (data) => {
  const transaction = await TransactionModel.create(data);
   if (data.orderId) {
    await Order.findByIdAndUpdate(
      data.orderId,
      { paymentStatus: "accepted" },
      { new: true }
    );
  }

  return transaction;
};
const getTransactions = async () => {
  const transaction = await TransactionModel.find()
    .populate("orderId")
    .populate("employeeId")
  return transaction;
};

module.exports = {
  createTransaction,
  getTransactions,
};
