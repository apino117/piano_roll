const router = require("express").Router();
const websiteRoutes = require("./website");

// We defined our routes inwebsite, this is gonna use them
router.use("/website", websiteRoutes);

module.exports = router;