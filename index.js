const express = require("express");
const path = require("path");
const { Pool } = require("pg");
const port = process.env.PORT || 3000;

const app = express();

// Server configuration
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

//base de datos postgres
// Connection to the PostgreSQL database
const pool = new Pool({
    user: "pikpgpor",
    host: "fanny.db.elephantsql.com",
    database: "pikpgpor",
    password: "S3T2Ns4EVpNcSsWOaTaPT0LXAwODC4Yr",
    port: 5432
  });
  console.log("Successful connection to the database");



  
  // Starting the server
  app.listen(port, () => {
    console.log("Server started (http://localhost:$port/) !");
  });
  
  // GET /
  
  
  
  
  // GET /index
  app.get("/", (req, res) => {
    const sql = "SELECT * FROM empleado";
    
    pool.query(sql, [], (err, result) => {
      if (err) {
        return console.error(err.message);
      }
      console.log(result.rows);
      res.render("index", { model: result.rows });
    });
  });
  
  // GET /create
  app.get("/create", (req, res) => {
    res.render("create", { model: {} });
  });
  
  // POST /create
  app.post("/create", (req, res) => {
    const sql = "INSERT INTO empleado (nombre, correo, fechaIngreso) VALUES ($1, $2, $3)";
    const book = [req.body.nombre, req.body.correo, req.body.fechaIngreso];
    
    pool.query(sql, book, (err, result) => {
      if (err) {
        return console.error(err.message);
      }
      res.redirect("/");
    });
  });
  
  // GET /edit/5
  app.get("/edit/:id", (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM empleado WHERE id = $1";
    pool.query(sql, [id], (err, result) => {
      if (err) {
        return console.error(err.message);
      }
      res.render("edit", { model: result.rows[0] });
    });
  });
  
  // POST /edit/5
  app.post("/edit/:id", (req, res) => {
    const id = req.params.id;
    const book = [req.body.nombre, req.body.correo, req.body.fechaingreso, id];
    const sql = "UPDATE empleado SET nombre = $1, correo = $2, fechaIngreso = $3 WHERE (id = $4)";
    pool.query(sql, book, (err, result) => {
      if (err) {
        return console.error(err.message);
      }
      res.redirect("/");
    });
  });
  
  // GET /delete/5
  app.get("/delete/:id", (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM empleado WHERE id = $1";
    pool.query(sql, [id], (err, result) => {
      if (err) {
        return console.error(err.message);
      }
      res.render("delete", { model: result.rows[0] });
    });
  });
  
  // POST /delete/5
  app.post("/delete/:id", (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM empleado WHERE id = $1";
    pool.query(sql, [id], (err, result) => {
      if (err) {
        return console.error(err.message);
      }
      res.redirect("/");
    });
  });