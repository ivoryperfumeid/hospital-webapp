const mongoose = require("mongoose");
const dotenv = require("dotenv");
const faker = require("@faker-js/faker");
const User = require("./models/User");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const seedUsers = async () => {
    await User.deleteMany();

    for (let i = 0; i < 20; i++) {
        await User.create({
            name: faker.person.fullName(),
            email: faker.internet.email(),
            phone: faker.phone.number(),
            role: faker.helpers.arrayElement(["admin", "doctor", "nurse", "staff"]),
        });
    }

    console.log("User seeding selesai!");
    process.exit();
};

seedUsers();
