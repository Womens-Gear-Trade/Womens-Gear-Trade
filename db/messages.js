const client = require('./client');

async function createMessage({ postId, creatorId, content }) {
  try {
    const {
      rows: [message],
    } = await client.query(
      `
          INSERT INTO messages ("postId", "creatorId", content)
          VALUES ($1, $2, $3)
          RETURNING *;
          `,
      [postId, creatorId, content]
    );
    return message;
  } catch (error) {
    throw error;
  }
}

async function getAllMessages() {
  try {
    const { rows: message } = await client.query(
      `
        SELECT * FROM messages;
      `
    );
    return message;
  } catch (error) {
    console.log('error gettingAllUsers');
    throw error;
  }
}

async function getMessageById(id) {
  try {
    const { rows: message } = await client.query(
      `
      SELECT *
      FROM messages
      WHERE id = ${id};
      `
    );
    return message;
  } catch (error) {
    throw error;
  }
}

async function getMessageByPostId(postId) {
  try {
    const { rows: message } = await client.query(
      `
      SELECT messages.*
      FROM messages
      JOIN gearPosts ON messages."postId" = gearPosts.id
      WHERE messages."postId" = ${postId};
      `
    );
    return message;
  } catch (error) {
    throw error;
  }
}

async function getMessageByCreatorId(creatorId) {
  try {
    const { rows: message } = await client.query(
      `
        SELECT messages.*
        FROM messages
        JOIN users ON messages."creatorId" = users.id
        WHERE messages."creatorId" = ${creatorId};
        `
    );
    return message;
  } catch (error) {
    throw error;
  }
}

async function getMessageByActive(active) {
  try {
    const { rows: message } = await client.query(
      `
        SELECT *
        FROM messages
        WHERE active = $1;
        `,
      [active]
    );

    return message;
  } catch (error) {
    throw error;
  }
}

async function attachMessageToGearPost(gearPosts) {
  const gearPostsToReturn = [...gearPosts];
  console.log('these are the gearPosts to return', gearPostsToReturn);

  try {
    const { rows: messages } = await client.query(`
      SELECT messages.*
      FROM messages
      JOIN gearPosts ON messages."postId" = gearPosts.id
      `);

    for (const gearPost of gearPostsToReturn) {
      const messagesToAdd = messages.filter(
        (message) => message.postId === gearPost.id
      );
      console.log('this is messages to Add', messagesToAdd);
      gearPost.messages = messagesToAdd;
    }
    return gearPostsToReturn;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createMessage,
  getAllMessages,
  getMessageById,
  getMessageByPostId,
  getMessageByCreatorId,
  getMessageByActive,
  attachMessageToGearPost,
};
