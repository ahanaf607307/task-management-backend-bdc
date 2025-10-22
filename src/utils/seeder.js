const mongoose = require("mongoose");
require("dotenv").config();
const { User } = require("../models");

const usersData = [
  {
    "firstName": "Testing",
    "lastName": "Admin",
    "fullName": "Testing Admin",
    "email": "admin@gmail.com",
    "image": "/uploads/users/user.png",
    "password": "$2a$08$cUQ3uMdbQjlyDF/dgn5mNuEt9fLJZqq8TaT9aKabrFuG5wND3/mPO",
    "role": "admin",
    "callingCode": "+880",
    "phoneNumber": 1735566789,
    "nidNumber": 123456789,
    "isNIDVerified": true,
    "gender": "other",
    "height": "5'10\"",
    "country": "Bangladesh",
    "city": "Dhaka",
    "residentialStatus": "Citizen",
    "education": "Masters",
    "workExperience": "5 years",
    "occupation": "Software Engineer",
    "income": {
      "currency": "BDT",
      "amount": "100000"
    },
    "maritalStatus": "Single",
    "motherTongue": "Bengali",
    "religion": "Islam",
    "sect": "Sunni",
    "caste": "General",
    "dataOfBirth": "1990-01-01T00:00:00.000Z",
    "address": "123 Admin Road, Dhaka",
    "oneTimeCode": null,
    "isEmailVerified": true,
    "isResetPassword": false,
    "isProfileCompleted": true,
    "fcmToken": null,
    "isDeleted": false,
    "securitySettings": {
      "recoveryEmail": "admin.recovery@gmail.com",
      "recoveryPhone": "+8801734567890",
      "securityQuestion": "What is your favorite color?",
      "securityAnswer": "e99a18c428cb38d5f260853678922e03"
    }
  },
  {
    "firstName": "Test",
    "lastName": "UserMale",
    "fullName": "Test UserMale",
    "email": "user.male@gmail.com",
    "image": "/uploads/users/user.png",
    "password": "$2a$08$cUQ3uMdbQjlyDF/dgn5mNuEt9fLJZqq8TaT9aKabrFuG5wND3/mPO",
    "role": "user",
    "callingCode": "+880",
    "phoneNumber": 1735566790,
    "nidNumber": 223456789,
    "isNIDVerified": false,
    "gender": "male",
    "height": "5'9\"",
    "country": "Bangladesh",
    "city": "Chittagong",
    "residentialStatus": "Resident",
    "education": "Bachelors",
    "workExperience": "2 years",
    "occupation": "Graphic Designer",
    "income": {
      "currency": "BDT",
      "amount": "50000"
    },
    "maritalStatus": "Single",
    "motherTongue": "Bengali",
    "religion": "Islam",
    "sect": "Sunni",
    "caste": "General",
    "dataOfBirth": "1995-05-20T00:00:00.000Z",
    "address": "456 User Lane, Chittagong",
    "oneTimeCode": null,
    "isEmailVerified": true,
    "isResetPassword": false,
    "isProfileCompleted": true,
    "fcmToken": null,
    "isDeleted": false,
    "securitySettings": {
      "recoveryEmail": "user.male.recovery@gmail.com",
      "recoveryPhone": "+8801734567891",
      "securityQuestion": "What is your pet's name?",
      "securityAnswer": "5f4dcc3b5aa765d61d8327deb882cf99"
    }
  },
  {
    "firstName": "Test",
    "lastName": "UserFemale",
    "fullName": "Test UserFemale",
    "email": "user.female@gmail.com",
    "image": "/uploads/users/user.png",
    "password": "$2a$08$cUQ3uMdbQjlyDF/dgn5mNuEt9fLJZqq8TaT9aKabrFuG5wND3/mPO",
    "role": "user",
    "callingCode": "+880",
    "phoneNumber": 1735566791,
    "nidNumber": 323456789,
    "isNIDVerified": true,
    "gender": "female",
    "height": "5'6\"",
    "country": "Bangladesh",
    "city": "Sylhet",
    "residentialStatus": "Citizen",
    "education": "PhD",
    "workExperience": "7 years",
    "occupation": "Researcher",
    "income": {
      "currency": "BDT",
      "amount": "120000"
    },
    "maritalStatus": "Divorced",
    "motherTongue": "Bengali",
    "religion": "Islam",
    "sect": "Shia",
    "caste": "General",
    "dataOfBirth": "1988-11-10T00:00:00.000Z",
    "address": "789 Research Blvd, Sylhet",
    "oneTimeCode": null,
    "isEmailVerified": true,
    "isResetPassword": false,
    "isProfileCompleted": true,
    "fcmToken": null,
    "isDeleted": false,
    "securitySettings": {
      "recoveryEmail": "user.female.recovery@gmail.com",
      "recoveryPhone": "+8801734567892",
      "securityQuestion": "What is your favorite movie?",
      "securityAnswer": "098f6bcd4621d373cade4e832627b4f6"
    }
  }
]


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  }
};

const dropDatabase = async () => {
  try {
    await mongoose.connection.dropDatabase();
    console.log("Database dropped successfully!");
  } catch (err) {
    console.error("Error dropping database:", err);
  }
};

const seedUsers = async () => {
  try {
    await User.deleteMany();
    await User.insertMany(usersData);
    console.log("Users seeded successfully!");
  } catch (err) {
    console.error("Error seeding users:", err);
  }
};

const seedDatabase = async () => {
  await connectDB();
  await dropDatabase();
  await seedUsers();
  console.log("Database seeding completed!");
  mongoose.disconnect();
};

seedDatabase();