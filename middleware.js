const Listing = require("./models/listing");
const Review = require("./models/review");
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema,reviewSchema} = require("./schema.js");


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
};

 // for listing owner 
module.exports.isOwner = async(req, res, next) =>{
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner.equals(res.locals.currUser._id)){
        req.flash("error", "Access Denied! This listing belongs to someone else.");
        return res.redirect(`/listings/${id}`);
    }
    next(); 
};


// middleware for validate listing ie: Schema validation => server side validation
module.exports.validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        req.flash("error", errMsg);
        const id = req.params.id;
        if (id) {
            return res.redirect(`/listings/${id}/edit`); 
        } else {
            return res.redirect("/listings/new");      
        }
    }
    next();
};



// middleware for validate review ie: Schema validation => server side validation
module.exports.validateReview = (req, res, next)=>{
    let { error } = reviewSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el)=> el.message).join(",");
        throw new ExpressError(400, errMsg);
    }
    next();
};


 // for review author 
module.exports.isReviewAuthor = async(req, res, next) =>{
    let {id, reviewId } = req.params;
    let review = await Review.findById(reviewId);
    if(!review.author.equals(res.locals.currUser._id)){
        req.flash("error", "Access Denied! This review belongs to someone else.");
        return res.redirect(`/listings/${id}`);
    }
    next(); 
};