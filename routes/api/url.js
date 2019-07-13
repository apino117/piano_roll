const router = require("express").Router();
const urlController = require("../../controllers/urlController");

// Matches with /api/url
router.route("/")
    .get(urlController.findAll)
    .post(urlController.create);

// Matches with /api/url/:id
router.route("/:id")
    .get(urlController.findById);



module.exports = router;