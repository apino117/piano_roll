const router = require("express").Router();
const urlController = require("../../controllers/urlController");

// Matches with /api/url
router
    .route("/")
    .get(urlController.findAll)
    .post(urlController.create);

// Matches with /api/url/whateverthetitleisnoquotesbutstill all the spaces(?)
// Ex: http://localhost:3001/api/url/Q-Tip (musician) - Wikipedia
router
    .route("/:title")
    .get(urlController.findByTitle)

// Matches with /api/url/:id
// router
//     .route("/:id")
//     .get(urlController.findById);

// Matches with /api/url/:url
// router
//     .route("/:url")
//     .get(urlController.findByUrl)

module.exports = router;