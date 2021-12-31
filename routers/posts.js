const express = require("express");
const mongodb = require("mongodb");
const router = express.Router();

router.get('/', async function getPosts(req, res) {
  const posts = await req.db.collection("posts").find("").toArray();
  res.status(200).json(posts);
});

router.post('/create', async function createPost(req, res) {
  const { userName, timeStamp, content, image } = req.body;

  const newPost = { userName, timeStamp, content, image };

  await db.collection("posts").insertOne(newPost);

  res.status(201).json(newPost);
});

module.exports = router;