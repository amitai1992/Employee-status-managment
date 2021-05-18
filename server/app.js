const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3080;
const mongoose = require("mongoose");
const router = require("./Routes/Router");
const path = require('path');

let employeeSchema = require('./emloyeeSchema/employeeSchema');
app.use(express.static(path.join(__dirname, '../my-app/build')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb+srv://amitai-admin:nehama1992@cluster0.nobba.mongodb.net/employees?retryWrites=true&w=majority",
 { useNewUrlParser: true ,useUnifiedTopology: true, useFindAndModify: false  });
const Employee = mongoose.model("Employee", employeeSchema);

app.use(function (req, res, next) {
    req.con = mongoose;
    req.schema = Employee;
    next();
});

app.use(router);

app.listen(port, () => {
    console.log('server listen at port ' + port);
});