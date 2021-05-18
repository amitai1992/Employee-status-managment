const express = require('express');
const router = express.Router();
const controller = require('../Controller/controller');

router.get("/", controller.get);
router.get("/signup", controller.get)
router.get("/login", controller.get)
router.get("/dashboard", controller.get)
router.post("/api/login", controller.getUser);
router.post("/api/updateStatus", controller.updateStatus);
router.post("/api/signUp", controller.insertUser);
router.get("/api/getList", controller.getEmployeeList);
router.get("/api/filterByName", controller.filterByName);



module.exports = router;
