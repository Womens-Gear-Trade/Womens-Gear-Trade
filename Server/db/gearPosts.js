const client = require('./client');

async function createGearPost({
  title,
  location,
  description,
  price,
  condition,
  category,
  size,
  authorId,
  createdAt,
}) {
  try {
    const {
      rows: [gearPost],
    } = await client.query(
      `
            INSERT INTO gearPosts (   title,
                location,
                description,
                price,
                condition,
                category,
                size,
                "authorId",
                createdAt
                
                )
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
            RETURNING *;
            `,
      [
        title,
        location,
        description,
        price,
        condition,
        category,
        size,
        authorId,
        createdAt,
      ]
    );
    console.log('first create gearPost ', gearPost);
    return gearPost;
  } catch (error) {
    console.error('this is error in creategearPost', error);
    throw error;
  }
}

async function getAllGearPosts() {
  try {
    const { rows: gearPost } = await client.query(`
      SELECT *
      FROM gearPosts
      `);
    console.log('These are our all our services :', gearPost);
    return gearPost;
  } catch (error) {
    throw error;
  }
}

async function getGearPostById(id) {
  try {
    const { rows: gearPost } = await client.query(
      `
      SELECT *
      FROM gearPosts
      WHERE id = ${id};
      `
    );
    console.log('These are our gearPosts by id:', gearPost);
    return gearPost;
  } catch (error) {
    throw error;
  }
}

async function getGearPostByDate(createdAt) {
  try {
    const { rows: gearPost } = await client.query(
      `
      SELECT *
      FROM gearPosts
      WHERE createdAt = $1;
      `,
      [createdAt]
    );
    console.log('These are our gearPost by date:', gearPost);
    return gearPost;
  } catch (error) {
    throw error;
  }
}

async function getGearPostsByName(title) {
  try {
    const { rows: gearPost } = await client.query(
      `
      SELECT *
      FROM gearPosts
      WHERE title = $1;
      `,
      [title]
    );
    console.log('These are our gearPost by Name name:', gearPost);
    return gearPost;
  } catch (error) {
    throw error;
  }
}

async function getGearPostByActive(active) {
  try {
    const { rows: gearPost } = await client.query(
      `
      SELECT *
      FROM gearPosts
      WHERE active = $1;
      `,
      [active]
    );
    console.log('These are our gearPost by if active', gearPost);
    return gearPost;
  } catch (error) {
    throw error;
  }
}

async function getGearPostByUser(id) {
  try {
    const { rows: gearPost } = await client.query(
      `
      SELECT gearPosts.* 
      FROM gearPosts
      JOIN users on gearPosts."authorId" = users.id
      WHERE gearPosts."authorId" = ${id}
      `
    );
    console.log('this is gearPosts By User', gearPost);
    return gearPost;
  } catch (error) {
    throw error;
  }
}

async function updateGearPosts(id, { ...fields }) {
  console.log('id:', id, 'update fields:', fields);
  const setString = Object.keys(fields)
    .map((key, index) => `"${key}"=$${index + 1}`)
    .join(', ');

  try {
    const {
      rows: [gearPost],
    } = await client.query(
      `
      UPDATE gearPosts
      SET ${setString}
      WHERE id = ${id}
      RETURNING *;
      `,

      Object.values(fields)
    );
    console.log('These are my updated gearPosts: ', gearPost);
    return gearPost;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createGearPost,
  getAllGearPosts,
  getGearPostByActive,
  getGearPostByDate,
  getGearPostById,
  getGearPostByUser,
  getGearPostsByName,
  updateGearPosts,
};
