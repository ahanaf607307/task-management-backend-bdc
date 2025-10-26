const Joi = require("joi");
const { objectId } = require("./custom.validation");

const createTask = {
  body: Joi.object().keys({
    createdBy: Joi.string().custom(objectId).required(),
    taskType: Joi.string().valid("social media", "video content", "corporate").required(),
    tag: Joi.array().items(Joi.string()).default([]),
    services: Joi.array().items(Joi.string()).default([]),
    price: Joi.number().min(0).required(),
    taskQuantity: Joi.number().integer().min(1).required(),
    title: Joi.string().required(),
    status: Joi.string().valid("active", "inactive", "pending").default("active"),
  }),
};

const updateTask = {
  body: Joi.object()
    .keys({
      taskType: Joi.string().valid("social media", "video content", "corporate"),
      tag: Joi.array().items(Joi.string()),
      services: Joi.array().items(Joi.string()),
      price: Joi.number().min(0),
      taskQuantity: Joi.number().integer().min(1),
      title: Joi.string(),
      status: Joi.string().valid("active", "inactive", "pending"),
      isDeleted: Joi.boolean(),
    })
    .min(1),
};

module.exports = {
  createTask,
  updateTask,
};
