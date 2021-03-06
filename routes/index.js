const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const passportRoutes = require("./passport")

// API Routes
router.use("/api", apiRoutes);

// Passport routes(?)
// router.use("/", passportRoutes)

// If no API routes are hit, send the React app
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
