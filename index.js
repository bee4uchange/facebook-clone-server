const express = require("express");
const mongodb = require("mongodb");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let db = null;

async function startServer() {
  const client = await mongodb.MongoClient.connect(
    process.env.MONGODB_URL ||
      "mongodb+srv://admin:admin@cluster0.t9zsx.mongodb.net/facebook"
  );

  db = client.db();

  app.listen(process.env.PORT || 3001);
  console.log("Listening port 3001");
}

startServer();

function setDb(req, res, next) {
  req.db = db;
  next();
}
app.use(setDb);

const posts = require("./routers/posts");
app.use(posts);
