const express = require('express');
const {
  createGearPost,
  getAllGearPosts,
  getGearPostByActive,
  getGearPostByDate,
  getGearPostById,
  getGearPostByUser,
  getGearPostsByName,
  updateGearPosts,
} = require('../db');
const { requireUser } = require('./utils');
const gearPostsRouter = express.Router();

// GET /api/gearPosts

gearPostsRouter.get('/', async (req, res, next) => {
  try {
    const gearPosts = await getAllGearPosts();
    res.send(gearPosts);
  } catch (error) {
    next(error);
  }
});

gearPostsRouter.get('/:gearPostId', requireUser, async (req, res, next) => {
  let id = req.params.gearPostId;
  try {
    if (req.user) {
      const gearPostById = await getGearPostById(id);
      res.send(gearPostById);
    }
  } catch (error) {
    next(error);
  }
});

gearPostsRouter.get(
  '/:userId/gearPost',
  requireUser,
  async (req, res, next) => {
    let id = req.params.userId;
    // console.log('These are the params', req.params.userId);
    try {
      if (req.user) {
        const userGearPost = await getGearPostByUser(id);
        res.send(userGearPost);
      }
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
);

// POST /api/gearPosts

gearPostsRouter.post('/', requireUser, async (req, res, next) => {
  const {
    title,
    location,
    description,
    price,
    condition,
    category,
    size,
    authorId,
    createdAt,
  } = req.body;
  if (req.user);
  {
    try {
      // console.log('this our reqbod:', req.body);
      const newGearPost = await createGearPost({
        title,
        location,
        description,
        price,
        condition,
        category,
        size,
        authorId,
        createdAt,
      });

      res.send(newGearPost);
    } catch (error) {
      next(error);
    }
  }
});

//PATCH /api/services/:serviceId
gearPostsRouter.patch('/:gearPostId', requireUser, async (req, res, next) => {
  const {
    title,
    location,
    description,
    price,
    condition,
    category,
    size,
    authorId,
    createdAt,
  } = req.body;

  const id = req.params.gearPostId;

  try {
    const ogGearPost = await getGearPostById(id);

    if (!ogGearPost) {
      next({
        error: 'error',
        name: 'NoGearPostFoundError',
        message: `Gear Post ${id} not found`,
      });
    } else {
      const updatedGearPost = await updateGearPosts(id, {
        title,
        location,
        description,
        price,
        condition,
        category,
        size,
        authorId,
        createdAt,
      });

      res.send(updatedGearPost);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = gearPostsRouter;
