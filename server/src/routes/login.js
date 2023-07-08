const express = require("express")
const routerLogin = express.Router();
routerLogin.post("/login", (req, res) => {
    res.send("this is login page");
    console.log(req.body)
})
module.exports = routerLogin;