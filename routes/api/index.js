const path = require("path");
const router = require("express").Router();
const websiteRoutes = require("./website");
const fetchRoutes = require("./fetch");
const urlRoutes = require("./url")

// We defined our routes inwebsite, this is gonna use them
router.use("/website", websiteRoutes);
router.use("/fetch", fetchRoutes);
router.use("/url", urlRoutes)

// For anything else, render the html page
// router.use(function (req, res) {
//     res.sendFile(path.join(__dirname, "../../client/build/index.html"));
// });

module.exports = router;