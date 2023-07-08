const express = require("express")
const routerRegister = express.Router();
routerRegister.post("/register", (req, res) => {
    res.send("this is register page");
    console.log(req.body);
})
module.exports = routerRegister;
