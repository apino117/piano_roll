const router = require("express").Router();
const websiteRoutes = require("./website");

// We defined our routes inwebsite, this is gonna use them
router.use("/website", websiteRoutes);

// For anything else, render the html page
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;