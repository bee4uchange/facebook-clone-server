const express = require("express");
const mongodb = require("mongodb");
const router = express.Router();

router.get('/', async function getPosts(req, res) {
  const posts = await req.db.collection("posts").find("").toArray();
  res.status(200).json(posts);
});

router.post('/post', function createPost(req, res) {
  // const { answers, text, correctAnswer } = req.body;
  // let error = false;

  // answers.map((answer) => {
  //   if (answer === "") {
  //     error = true;
  //   }
  // });

  // if (!text || correctAnswer === -1 || error) {
  //   res.status(400).end("INVALID REQUEST");
  // } else {
  //   const newQuestion = { answers, text, correctAnswer };

  //   await db.collection("questions").insertOne(newQuestion);

  //   res.status(201).json(newQuestion);
  // }
});

module.exports = router;