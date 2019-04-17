// Set up MySQL connection.
var mysql = require("mysql");

var connection

if (process.env.JAWSDB_URL) {
  connection = mysql.createConntection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConntection({
    host: "localhost",
    user: "root",
    password: "Cursed4312!",
    database: "burgers_db"
  });
};
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id: " + connection.threadId);
});

// Export connection for our ORM to use.
connection.connect();
module.exports = connection;