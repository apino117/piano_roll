const router = require("express").Router();
const fetchController = require("../../controllers/fetch");

router.get("/", fetchController.scrapedWebsites);

module.exports = router;
