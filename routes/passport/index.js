const path = require("path");
const router = require("express").Router();

// We defined our routes inwebsite, this is gonna use them


// For anything else, render the html page
// router.use(function (req, res) {
//     res.sendFile(path.join(__dirname, "../../client/build/index.html"));
// });

module.exports = router;