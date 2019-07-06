const router = require("express").Router();
const websiteController = require("../../controllers/websiteController");


// Matches with "/api/website"
router.route("/")
    .get(websiteController.findAll);


// ---------- UNCOMMENT WHEN NECESSARY
// const websiteController = require("../../controllers/websiteController");

// Matches with "/api/books"
// router.route("/")
//     .get(websiteController.findAll)
//     .post(websiteController.create);

// // Matches with "/api/website/:id"
// router
//     .route("/:id")
//     .get(websiteController.findById)
//     .put(websiteController.update)
//     .delete(websiteController.remove);

module.exports = router;
