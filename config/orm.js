var connection = require("./connection.js");

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
}


var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM ?? ;";
        connection.query(queryString, [tableInput], function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        })
    },
    updateOne: function(table, id, cb) {
        var queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += "devoured = true";
        queryString += " WHERE id = ";
        queryString += id;

        console.log(queryString);
        connection.query(queryString, function(err, res) {
            if (err) {
                throw err;
            }

            cb(res);
        });
    }
};

module.exports = orm;