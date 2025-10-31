const express = require("express");
const auth = require("../../middlewares/auth");
const { orderController, transactionController } = require("../../controllers");



const TransactionRouter = express.Router();

TransactionRouter.route("/create-transaction").post(auth("common"),  transactionController.createTransaction);
TransactionRouter.route("/get-all-transaction").get(auth("common"), transactionController.getTransactions);
// TransactionRouter.route("/get-all-orders").get(auth("admin" || "client"), orderController.getOrder);


  

module.exports = TransactionRouter;
