const { User } = require("../models");


const bcryptjs  = require('bcryptjs')

const seedAdmin = async () => {
  try {
    const isSupperAdminExist = await User.findOne({
      email: "admin1@gmail.com",
    });
    if (isSupperAdminExist) {
      console.log("Supper Admin Already Exist");
      return;
    }
    console.log("Trying to create supper admin");
    const hashedPassword = await bcryptjs.hash(
     "admin1@g",
      10
    );

    const payload = {
      name: "Admin",
      email: "admin1@gmail.com",
      password: hashedPassword,
      role: "admin",
      isVerified: true,
    };
    const Admin = await User.create(payload);
    console.log("Admin Created Successfully \n");
    console.log(Admin);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
 seedAdmin
};
