const mysql = require("mysql2/promise");

// MySQL
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  port: "3360",
  user: "root",
  password: "",
  database: "blog_node",
});

module.exports = pool;
