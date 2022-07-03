const express = require("express");

const db = require("../data/database");

const router = express.Router();

router.get("/", function (req, res) {
  res.redirect("/posts");
});

router.get("/posts", async function (req, res) {
  const query = `SELECT posts.*, authors.name AS author_name 
                  FROM posts
                INNER JOIN authors ON posts.author_id = authors.id`;
  const [posts] = await db.query(query);
  res.render("posts-list", { posts: posts });
});

router.get("/new-post", async function (req, res) {
  const [authors] = await db.query("SELECT * FROM authors");
  res.render("create-post", { authors: authors });
});

router.post("/posts", async function (req, res) {
  const data = [req.body.title, req.body.summary, req.body.content, req.body.author];
  //insert
  await db.query("INSERT INTO posts (title, summary, body, author_id) VALUES (?)", [data]);
  //mysql2 package é que faz isto automaticamente em vez de colocar o 4 pontos de exclamaçao
  res.redirect("/posts");
});

router.get("/posts/:id", async function (req, res) {
  const query = `SELECT posts.*, authors.name AS author_name, authors.email AS author_email FROM posts
                INNER JOIN authors ON posts.author_id = authors.id
                WHERE posts.id = ?`;
  const [result] = await db.query(query, [req.params.id]);

  if (!result || result.length === 0) {
    return res.status(404).render("404");
  }

  const postData = {
    ...result[0],
    date: result[0].date.toISOString(),
    humanReadableDate: result[0].date.toLocaleDateString("pt-PT", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };
  //console.log(postData);

  res.render("post-detail", { post: postData });
});

router.get("/posts/:id/edit", async function (req, res) {
  const query = `SELECT * FROM posts WHERE id = ?`;
  const [posts] = await db.query(query, [req.params.id]);

  if (!posts || posts.length === 0) {
    return res.status(404).render("404");
  }

  res.render("update-post", { post: posts[0] });
});

router.post("/posts/:id/edit", async function (req, res) {
  const query = `UPDATE posts SET title = ?, summary = ?, body = ?
                WHERE id = ?`;
  await db.query(query, [req.body.title, req.body.summary, req.body.content, req.params.id]);

  res.redirect("/posts");
});

router.post("/posts/:id/delete", async function (req, res) {
  const query = `DELETE FROM posts WHERE id = ?`;
  await db.query(query, [req.params.id]);

  res.redirect("/posts");
});
module.exports = router;