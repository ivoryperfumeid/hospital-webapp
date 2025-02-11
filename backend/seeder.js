const { faker } = require('@faker-js/faker');

const seedUsers = async () => {
    const users = [];

    for (let i = 0; i < 10; i++) {
        users.push({
            name: faker.person.fullName(),  // ✅ SESUAI DENGAN V8+
            email: faker.internet.email(),
            phone: faker.phone.number(),
            role: faker.helpers.arrayElement(['Admin', 'Doctor', 'Nurse', 'Patient']),
        });
    }

    console.log(users);
};

seedUsers();
