const express = require("express");
const config = require("../../config/config");
const authRoute = require("./auth.routes");
const userRoute = require("./user.routes");
const docsRoute = require("./docs.routes");
const profileRoute = require("./profile.routes");
const subscriptionRoute = require("./subscription.routes");
const TaskRouter = require("./task.route");
const TaskCategoryRouter = require("./task.category.route");
const TaskServiceRouter = require("./task.service.route");
const TaskSubCategoryRouter = require("./task.subCategory.route");


const router = express.Router();

const defaultRoutes = [
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/users",
    route: userRoute,
  },
  {
    path: "/subscription",
    route: subscriptionRoute,
  },
 {
    path: "/profiles",
    route: profileRoute,
  },
 {
    path: "/tasks",
    route: TaskRouter,
  },
 {
    path: "/tasks/category",
    route: TaskCategoryRouter,
  },
 {
    path: "/tasks/sub-category",
    route: TaskSubCategoryRouter,
  },
 {
    path: "/tasks/category-service",
    route: TaskServiceRouter,
  },

];

const devRoutes = [
  // routes available only in development mode
  {
    path: "/docs",
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === "development") {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
