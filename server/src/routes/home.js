const express = require("express")
const router = express.Router();
router.get("/", (req, res) => {
    res.send("this is home page");
    console.log(req.body)
})
module.exports = router;