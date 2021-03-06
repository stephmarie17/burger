const orm = require("../config/orm.js");

const burgers = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    insert: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },

    update: function(id, cb) {
        orm.updateOne("burgers", id, function(res) {
            cb(res);
        });
    }
};

module.exports = burgers;