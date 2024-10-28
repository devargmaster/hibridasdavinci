const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authenticateJWT = require("../middlewares/authMiddleware");

router.post("/login", authController.login);


router.get("/protected", authenticateJWT, authController.protected);

module.exports = router;
