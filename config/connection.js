const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "us-cdbr-iron-east-05.cleardb.net",
    port: 3306,
    user: "b17ee9350997c7",
    password: "efba3f0d",
    database: "heroku_6c7a099f15f256c"
});

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
module.exports = connection;
