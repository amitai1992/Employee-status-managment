const path = require('path');
const model = require('../Model/model');

module.exports = {
    get: function (req, res) {
        res.sendFile(path.join(__dirname, '../../my-app/build/index.html'));
    },

    getUser: function (req, res) { // get the user from the data base
        model.getUser(req, (err, result) => {
            if (err) throw err;
            res.json(result);
        });
    },

    insertUser: function (req, res) { // insert a user to the database
        model.insertUser(req, (err, result) => {
            if (err) throw err;
            res.json(result);
        });
    },

    updateStatus: function (req, res) { // update user status
        model.updateStatus(req, (err, result) => {
            if (err) throw err;
            res.json(result);
        })
    },

    getEmployeeList: function (req, res) {
        model.getEmployeeList(req, (err, result) => {
            if (err) throw err;
            res.json(result);
        })
    },

    filterByName: function (req, res) {
        model.filterByName(req, (err, result) => {
            if (err) throw err;
            res.json(result);
        })
    }



}