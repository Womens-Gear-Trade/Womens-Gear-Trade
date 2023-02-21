const client = require('./client');

async function createRoles({ roleName, roleCode, description, createdOn }) {
  try {
    const {
      rows: [role],
    } = await client.query(
      `
            INSERT INTO roles (roleName, roleCode, description, createdOn)
            VALUES ($1, $2, $3, $4)
            RETURNING *;
            `,
      [roleName, roleCode, description, createdOn]
    );
    return role;
  } catch (error) {
    throw error;
  }
}

async function getAllRoles() {
  try {
    const { rows: role } = await client.query(
      `
          SELECT * FROM roles;
        `
    );
    return role;
  } catch (error) {
    console.log('error gettingAllRoles');
    throw error;
  }
}

async function getRoleById(id) {
  try {
    const { rows: role } = await client.query(
      `
        SELECT *
        FROM roles
        WHERE id = ${id};
        `
    );
    return role;
  } catch (error) {
    throw error;
  }
}

async function getRoleByCode(roleCode) {
  try {
    const { rows: role } = await client.query(
      `
        SELECT *
        FROM roles
        WHERE roleCode = $1;
        `,
      [roleCode]
    );
    return role;
  } catch (error) {
    throw error;
  }
}

async function getRoleByName(roleName) {
  try {
    const { rows: role } = await client.query(
      `
          SELECT *
          FROM roles
          WHERE roleName = $1;
          `,
      [roleName]
    );
    return role;
  } catch (error) {
    throw error;
  }
}

async function getRoleByActive(active) {
  try {
    const { rows: role } = await client.query(
      `
          SELECT *
          FROM roles
          WHERE active = $1;
          `,
      [active]
    );
    return role;
  } catch (error) {
    throw error;
  }
}

async function getUserByRoleId(id) {
  try {
    const { rows: role } = await client.query(
      `
            SELECT users.*
            FROM users
            JOIN userRoles ON userRoles."userId" = users.id
            WHERE userRoles."roleId" = $1
            `,
      [id]
    );
    return role;
  } catch (error) {
    throw error;
  }
}

async function getRoleIdByUserId(id) {
  try {
    const { rows: role } = await client.query(
      `
              SELECT roles.*
              FROM roles
              JOIN userRoles ON userRoles."roleId" = roles.id
              WHERE userRoles."userId" = $1
              `,
      [id]
    );
    return role;
  } catch (error) {
    throw error;
  }
}

//get roole by id
//get role by role code/name
//get role by active

//get user by role id
//get roleid by user

module.exports = {
  createRoles,
  getAllRoles,
  getRoleById,
  getRoleByCode,
  getRoleByName,
  getRoleByActive,
  getUserByRoleId,
  getRoleIdByUserId,
};
