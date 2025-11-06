const express = require("express");
const auth = require("../../middlewares/auth");
const { orderController } = require("../../controllers");



const OrderRouter = express.Router();

OrderRouter.route("/create-order").post(auth("client"),  orderController.createOrder);
OrderRouter.route("/get-all-orders").get(auth("common"), orderController.getOrder);
// OrderRouter.route("/get-all-orders").get(auth("admin" || "client"), orderController.getOrder);


  

module.exports = OrderRouter;
