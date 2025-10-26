const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const { Tasks } = require("../models");

const createTask = async (data) => {
  const task = await Tasks.create(data);
  return task;
};

// const getTasksService = async (filter = {}, options = {}, user) => {
//   try {
//     const query = { isDeleted: false };

//     // Filter by user if provided
//     if (user && !filter.createdBy) {
//       query.createdBy = user._id;
//     }

//     // Dynamic filters
//     for (const key of Object.keys(filter)) {
//       if (filter[key] !== "") {
//         if (key === "title") {
//           query[key] = { $regex: filter[key], $options: "i" };
//         } else {
//           query[key] = filter[key];
//         }
//       }
//     }

//     const limit = options.limit ? parseInt(options.limit, 10) : 10;
//     const page = options.page ? parseInt(options.page, 10) : 1;
//     const sort = options.sortBy ? JSON.parse(options.sortBy) : { createdAt: -1 };

//     // Use aggregate to allow proper population
//     const aggregate = Tasks.aggregate([
//       { $match: query },
//       { $sort: sort },

//       // Lookup createdBy
//       {
//         $lookup: {
//           from: "users",
//           localField: "createdBy",
//           foreignField: "_id",
//           as: "createdBy",
//         },
//       },
//       { $unwind: { path: "$createdBy", preserveNullAndEmptyArrays: true } },

//       // Lookup category
//       {
//         $lookup: {
//           from: "categories",
//           localField: "categoryId",
//           foreignField: "_id",
//           as: "category",
//         },
//       },
//       { $unwind: { path: "$category", preserveNullAndEmptyArrays: true } },

//       // Lookup subCategory
//       {
//         $lookup: {
//           from: "subcategories",
//           localField: "subCategoryId",
//           foreignField: "_id",
//           as: "subCategory",
//         },
//       },
//       { $unwind: { path: "$subCategory", preserveNullAndEmptyArrays: true } },

//       // Lookup service
//       {
//         $lookup: {
//           from: "services",
//           localField: "serviceId",
//           foreignField: "_id",
//           as: "service",
//         },
//       },
//       { $unwind: { path: "$service", preserveNullAndEmptyArrays: true } },
//     ]);

//     // Paginate using aggregatePaginate
//     const tasks = await Tasks.paginate(aggregate, { page, limit });

//     return tasks;
//   } catch (error) {
//     throw new ApiError(`Error fetching tasks: ${error.message}`);
//   }
// };

const getAllTasksService = async () => {
  return await Tasks.find()
    .populate('createdBy', 'name email')
    .populate('categoryId', 'category')
    .populate('subCategoryId', 'subCategory')
    .populate('serviceId', 'service');
};


module.exports = {
  createTask,
  getAllTasksService
};
