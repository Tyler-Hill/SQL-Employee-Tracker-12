const express = require("express");
const mysql = require("mysql2");
require("dotenv").config();

const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: process.env.PW,
    database: process.env.DB,
  },
  console.log(`Connected to da database.`)
);

app.get("/api/movies", (req, res) => {
  db.query("SELECT * FROM movies", (err, rows) => {
    res.json({ message: "Succcccccess", data: rows });
  });
});

app.get("/api/reviews", (req, res) => {
  db.query("SELECT * FROM reviews JOIN movies ON reviews.movie_id = movies.id", (err, rows) => {
    res.json({ message: "SUCKYSESS", data: rows });
  });
});

app.post("/api/movies", (req, res) => {
  const params = req.body.movie_name;
  db.query("INSERT INTO movies (movie_name) VALUES (?)", params, (err, rows) => {
    res.json({ message: "YEEEEEEEEEEEEAAAAAH BOIIIIIIIII", data: req.body });
  });
});

app.delete("/api/movies/:id", (req, res) => {
  const params = req.params.id;
  db.query("DELETE FROM movies WHERE id = ?", params, (err, rows) => {
    res.json({ message: "SHE GOOOOOOOOOONE", changes: rows.affectedRows, id: req.params.id });
  });
});

app.put("/api/movies/:id", (req, res) => {
  const params = [req.body.movie_name, req.params.id];
  db.query("UPDATE movies SET movie_name = ? WHERE id = ?", params, (err, rows) => {
    res.json({ message: "WHAT DA DOG DOIN", data: req.body, changes: rows.affectedRows });
  });
});

app.listen(PORT, () => {
  console.log("Da Serv is runnin dawg");
});
