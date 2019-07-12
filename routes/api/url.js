const router = require("express").Router();
const urlController = require("../../controllers/urlController");

// Matches with /api/url
router.route("/")
    .get(urlController.findAll)
    .post(urlController.create)


module.exports = router;