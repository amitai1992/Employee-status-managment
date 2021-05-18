

module.exports = {
    getUser: function (req, callback) { // get the user from the database
        let con = req.con;
        const Employee = req.schema;
        let user = req.body;
        Employee.findOne({ _id: user.userEmail }, callback);
    },

    insertUser: function (req, callback) { // insert user
        let con = req.con;
        const Employee = req.schema;
        let user = new Employee(req.body);
        user.save(user, callback);

    },

    updateStatus: function (req, callback) { // update status
        let con = req.con;
        const Employee = req.schema;
        let user = req.body;
        Employee.findByIdAndUpdate({ _id: user._id }, { status: user.status }, { new: true }, callback);
    },

    getEmployeeList: function (req, callback) { // get list of employees
        let con = req.con;
        const Employee = req.schema;
        Employee.find({}, callback);
    },

    filterByName: function (req, callback) {
        let con = req.con;
        const Employee = req.schema;
        const name = req.query['name'];
        Employee.find({ name: name }, callback);
    }
}