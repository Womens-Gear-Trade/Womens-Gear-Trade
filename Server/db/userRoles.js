const client = require('./client');

async function createUserRoles({ userId, roleId }) {
  try {
    const {
      rows: [role],
    } = await client.query(
      `
            INSERT INTO userRoles ("userId", "roleId")
            VALUES ($1, $2)
            RETURNING *;
            `,
      [userId, roleId]
    );
    return role;
  } catch (error) {
    throw error;
  }
}

async function getAllUserRoles() {
  try {
    const { rows: role } = await client.query(
      `
          SELECT * FROM userRoles;
        `
    );
    return role;
  } catch (error) {
    console.log('error gettingAllUserRoles');
    throw error;
  }
}

module.exports = { createUserRoles, getAllUserRoles };
