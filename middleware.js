module.exports.isLoggedIn = (req, res , next)=>{
    if(!req.isAuthenticated()){
        // redirect Url
        req.session.redirectUrl = req.originalUrl;  // but it will be reset by the passport after login so we wont get anything for this we can create another middleware that save this into locals and passport has not access to reset local variables 
        req.flash("error" , "you must be logged-in to add new listings");
        return res.redirect("/login");
    }
    next();
};

module.exports.saveRedirectUrl = (req, res, next) =>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}