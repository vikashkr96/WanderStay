const express = require("express");
const router = express.Router();
const User = require("../models/user.js");

const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware.js");


// sign up
router.get("/signup",(req, res)=>{
    res.render("users/signup.ejs");
});

router.post("/signup", wrapAsync(async(req, res)=>{
    try{
        let {username, email, password} = req.body;
        const newUser = new User({email, username});
        const registeredUser = await User.register(newUser, password);

        req.login(registeredUser , (err) =>{
            if(err){
                return next(err);
            }
            req.flash("success","Successfully Signed-Up to WanderStay !")
            res.redirect("/listings");
        })
    }catch(e){
        req.flash("error",e.message);
        res.redirect("/signup");
    };

}));


// Login
router.get("/login",(req, res)=>{
    res.render("users/login.ejs");

});
router.post(
    "/login",
    saveRedirectUrl,
    passport.authenticate('local', 
        {failureRedirect:'/login',
        failureFlash:true
    }), 
    async(req, res)=>{
        req.flash("success", "Welcome back to the WonderStay!");
        let redirectUrl = res.locals.redirectUrl || "/listings";
        res.redirect(redirectUrl);
});

// logout
    router.get("/logout", (req, res, next) => {
        req.logout((err) => {
            if (err) {
                return next(err); 
            }
            req.flash("success", "You are logged Out");
            res.redirect("/listings");
        });
    });


module.exports = router;