const express = require("express");
const auth = require("../../middlewares/auth");
const { employeeTaskClaimController } = require("../../controllers");



const EmployeeTaskRouter = express.Router();

EmployeeTaskRouter.route("/claim").post(auth("employee"),  employeeTaskClaimController.claimEmployeeTask);
EmployeeTaskRouter.route("/get-all").get(auth("employee"), employeeTaskClaimController.getEmployeeTask);
// EmployeeTaskRouter.route("/get-all-orders").get(auth("admin" || "client"), orderController.getOrder);


  

module.exports = EmployeeTaskRouter;
