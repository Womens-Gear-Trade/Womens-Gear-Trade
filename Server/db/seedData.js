const client = require('./client');
require('dotenv').config();

const {
  createUser,
  getUser,
  getAllUsers,
  getUserByEmail,
  getUserById,
  getUserByUsername,
  updateUser,
} = require('./users');

async function dropTables() {
  try {
    console.log('Dropping All Tables!..');

    await client.query(`
    DROP TABLE IF EXISTS userRoles;
    DROP TABLE IF EXISTS roles;
    DROP TABLE IF EXISTS messages;
    DROP TABLE IF EXISTS gearPosts;
      DROP TABLE IF EXISTS users;
      `);

    console.log('All Tables Dropped!..');
  } catch (error) {
    console.log('Error dropping tables!..');
    throw error;
  }
}

async function createTables() {
  try {
    console.log('Starting to build tables...');

    await client.query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        username VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        UNIQUE (username, email)
      );
      
      CREATE TABLE gearPosts (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        location VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        price MONEY NOT NULL,
        condition VARCHAR(255),
        category VARCHAR(255),
        size VARCHAR(255),
        willDeliver BOOLEAN DEFAULT false,
        "authorID" INTEGER REFERENCES users(id),
        createdAt DATE,
        updatedAt DATE,
        active BOOLEAN DEFAULT true
      );

      CREATE TABLE messages (
        id SERIAL PRIMARY KEY,
        "postID" INTEGER REFERENCES gearPosts(id),
        "creatorID" INTEGER REFERENCES users(id),
        content TEXT,
        active BOOLEAN DEFAULT true
      );

      CREATE TABLE roles (
        id SERIAL PRIMARY KEY,
        roleName VARCHAR(255),
        roleCode VARCHAR(255),
        description TEXT,
        createdOn DATE,
        active BOOLEAN DEFAULT true
      );

      CREATE TABLE userRoles (
        id SERIAL PRIMARY KEY,
        "userID" INTEGER REFERENCES users(id),
        "roleID" INTEGER REFERENCES roles(id)
      );
      `);

    console.log('All tables created!');
  } catch (error) {
    console.error('Error creating tables!');
    throw error;
  }
}

async function createFakeUsers() {
  try {
    console.log('Starting to create users...');
    const fakeUsers = [
      {
        name: 'Ashley Hoath',
        email: 'ashley@gmail.com',
        address: '3103 Great Neck Ct.',
        username: 'ashley1',
        password: 'ashley123',
      },
      {
        name: 'Megan Miller',
        email: 'megan@gmail.com',
        address: '6102 Fun Day Lane',
        username: 'megan1',
        password: 'megan123',
      },
    ];
    const users = await Promise.all(fakeUsers.map(createUser));
    console.log('Users created:');
    console.log(users);
    console.log('Finished creating users!');
  } catch (error) {
    console.error('Error creating users!');
    throw error;
  }
}

async function testDB() {
  try {
    console.log('testing database!');

    const userByUsername = await getUserByUsername('ashley1');
    console.log('testing getUserByUsername', userByUsername);

    const allUsers = await getAllUsers();
    console.log('These are all the users!', allUsers);

    const userById = await getUserById(1);
    console.log('testing getUserById', userById);

    const userByUser = await getUser('ashley1', 'ashley123');
    console.log('testing getUser', userByUser);

    const userByEmail = await getUserByEmail('ashley@gmail.com');
    console.log('testing getUserByemail', userByEmail);

    const updatedUser = await updateUser(
      1,
      'sandy',
      'sandy@gmail.com',
      '2145 Happy Life Way',
      'rockstar',
      'lemons!'
    );
    console.log('testing updateUsers', updatedUser);

    console.log('finished testing database!');
  } catch (error) {
    console.log('error testing db');
    console.error(error);
  }
}

async function rebuildDB() {
  try {
    await dropTables();
    await createTables();
    await createFakeUsers();
    await testDB();
  } catch (error) {
    console.log('Error during rebuildDB');
    throw error;
  }
}

module.exports = {
  rebuildDB,
  dropTables,
  createTables,
};
