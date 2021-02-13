const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Return Blank home Page 

router.get("/", (req,res)=>{
    res.render("home");
});






// For render ejs files
router.get('/', authController.dashboard);
router.get('/signin', authController.signIn);
router.get('/signup', authController.signUp);

// For register new user call
router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

module.exports = router;