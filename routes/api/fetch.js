const router = require("express").Router();
const fetchController = require("../../controllers/fetch");

// router.get("/", fetchController.scrapedWebsites);
// router.post("/", fetchController.scrapedWebsites);

// /ap/fetch
router.route("/")
.get(fetchController.scrapedWebsites)
.post(fetchController.create)

module.exports = router;
