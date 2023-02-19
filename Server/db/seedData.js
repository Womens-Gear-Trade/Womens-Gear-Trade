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
const {
  createGearPost,
  getAllGearPosts,
  getGearPostByUser,
  getGearPostById,
  getGearPostByDate,
  getGearPostsByName,
  getGearPostByActive,
  updateGearPosts,
} = require('./gearPosts');

const {
  createMessage,
  getAllMessages,
  getMessageById,
  getMessageByPostId,
  getMessageByCreatorId,
  getMessageByActive,
  attachMessageToGearPost,
} = require('./messages');

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
        willdeliver BOOLEAN DEFAULT false,
        "authorId" INTEGER REFERENCES users(id),
        createdAt DATE,
        updatedat DATE DEFAULT null,
        active BOOLEAN DEFAULT true
      );

      CREATE TABLE messages (
        id SERIAL PRIMARY KEY,
        "postId" INTEGER REFERENCES gearPosts(id),
        "creatorId" INTEGER REFERENCES users(id),
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
        "userId" INTEGER REFERENCES users(id),
        "roleId" INTEGER REFERENCES roles(id)
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

async function createFakeGearPost() {
  try {
    const fakePost = [
      {
        title: 'Old Hoodie',
        location: 'fort collins',
        description: 'old comfy green',
        price: 5.0,
        condition: 'so old',
        category: 'apparel',
        size: 'M',
        authorId: 1,
        createdAt: '2023-02-19',
      },
    ];
    const fakePosts = await Promise.all(fakePost.map(createGearPost));
    console.log('gearPosts created:');
    console.log(fakePosts);
    console.log('Finished creating gearPosts!');
  } catch (error) {
    console.error('Error creating gearPosts!');
    throw error;
  }
}

async function createFakeMessages() {
  try {
    const fakeMessage = [
      {
        postId: 1,
        creatorId: 1,
        content: 'Very cool old hoodie I would like',
      },
      {
        postId: 1,
        creatorId: 2,
        content: 'No I would like the old hoodie',
      },
    ];
    const fakeMessages = await Promise.all(fakeMessage.map(createMessage));
    console.log('messages created:');
    console.log(fakeMessages);
    console.log('Finished creating messages!');
  } catch (error) {
    console.error('Error creating messages!');
    throw error;
  }
}

async function testDB() {
  try {
    console.log('testing database!');

    // *******************USER TESTS******************//

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

    // const updatedUser = await updateUser(
    //   1,
    //   'sandy',
    //   'sandy@gmail.com',
    //   '2145 Happy Life Way',
    //   'rockstar',
    //   'lemons!'
    // );
    // console.log('testing updateUsers', updatedUser);

    //*******************gearPosts TESTS******************//

    console.log('starting to test gearPosts');
    const allGearPosts = await getAllGearPosts();
    console.log('testing getAllGearPosts', allGearPosts);

    const gearPostsByUser = await getGearPostByUser(2);
    console.log('testing getGearPostsByUser', gearPostsByUser);

    const gearPostById = await getGearPostById(1);
    console.log('testing getGearPostById', gearPostById);

    const gearPostsByDate = await getGearPostByDate('2023-02-05');
    console.log('testing getGearPostsByDate', gearPostsByDate);

    const gearPostByName = await getGearPostsByName('Old Hoodie');
    console.log('testing getGearPostByName', gearPostByName);

    const gearPostByActive = await getGearPostByActive(true);
    console.log('testing getGearPostByActive', gearPostByActive);

    const gearByUser = await getGearPostByUser(1);
    console.log('testing getGearPostByUSer', gearByUser);

    // const updatedGearPost = await updateGearPosts(allGearPosts[0].id, {
    //   title: 'Old shoes',
    //   location: 'longmont',
    //   description: 'running shoes',
    //   price: 10.0,
    //   condition: 'new',
    //   category: 'shoes',
    //   size: '8',
    //   updatedat: '2023-02-20',
    //   active: false,
    // });
    // console.log('testing update gear post at index 0', updatedGearPost);

    //******************* MESSAGES TESTS******************//
    const allMessages = await getAllMessages();
    console.log('testing getAllMessages', allMessages);

    const messageById = await getMessageById(2);
    console.log('testing getMessageById', messageById);

    const messageByPostId = await getMessageByPostId(1);
    console.log('testing getMessageByPostId', messageByPostId);

    const messageByCreatorId = await getMessageByCreatorId(1);
    console.log('testing getMessageByCreatorId', messageByCreatorId);

    const messageByActive = await getMessageByActive(true);
    console.log('testing getMessageByActive', messageByActive);

    const attachMessageToGear = await attachMessageToGearPost(allGearPosts);
    console.log('testing attach message to gear post:', attachMessageToGear);
    console.log(
      'these are all the gear posts w messages attached',
      attachMessageToGear[0]
    );

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
    await createFakeGearPost();
    await createFakeMessages();
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
