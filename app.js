const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

// requiring the routes (express routers)
const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");
const { Users } = require("lucide-react");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

// connecting to the database
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
main().then(() => {
    console.log("Connected to DB");
}).catch((err) => {
    console.log(err);
});
async function main() {
    await mongoose.connect(MONGO_URL);
}

// session options 
const sessionOption = {
    secret: "mysupersecretcode",
    resave:false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000 ,
        maxAge: 7 * 24 * 60 * 60 * 1000 ,
        httpOnly: true,
    },
}



// home route
app.get("/", async (req, res) => {
    res.send("im at root");
});


// using sessions
app.use(session(sessionOption));
// using flash
app.use(flash());

//
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



// middleware for flash
app.use((req,res,next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
});

app.get("/demoUser", async(req,res)=>{
    let fakeUser = new User({
        email:"vikash@gmail.com",
        username: "vikashhhh"
    });

    let registeredUser = await User.register(fakeUser,"helloworld");
    res.send(registeredUser);
})




app.use("/listings",listings);
app.use("/listings/:id/reviews",reviews);

// catch all routes
app.use((req, res, next) => {
    next(new ExpressError(404, "Page not Found!"));
});

// error handler
app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong!" } = err;
    res.status(statusCode).render("error.ejs", { message, statusCode });
});

app.listen(8080, () => {
    console.log("Server Started Running !");
});



