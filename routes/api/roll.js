const router = require("express").Router();
const rollController = require("../../controllers/roll");

router.get("/", rollController.rollWebsite);

module.exports = router;