const client = require('./client');
const bcrypt = require('bcrypt');
const saltRounds = 10;

async function createUser({ name, email, username, password }) {
  try {
    //if password is exactly this turn is admin to true

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const {
      rows: [user],
    } = await client.query(
      `
        INSERT INTO users(name, email, username, password)
        VALUES ($1, $2, $3, $4)
        ON CONFLICT (username, email) DO NOTHING
        RETURNING *;
        `,
      [name, email, username, hashedPassword]
    );
    return user;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createUser,
};
