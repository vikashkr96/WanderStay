const Listing = require("../models/listing");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding ({accessToken : mapToken});

//filters added + search functionality added

module.exports.index = async (req, res) => {
    const { filter, search } = req.query;

    let query = {};

    if (filter) {
        query.category = filter;
    }

    if (search) {
        query.$or = [
            { title:    { $regex: search, $options: "i" } },
            { location: { $regex: search, $options: "i" } },
            { country:  { $regex: search, $options: "i" } },
        ];
    }

    const allListings = await Listing.find(query);
    res.render("listings/index.ejs", { 
        allListings, 
        query: req.query,
        searchQuery: search || ""
    });
};




module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
    .populate({path: "reviews", populate: { path: "author" }})
    .populate("owner");
    if(!listing){
        req.flash("error", "Listing Does Not Exist!");
        return res.redirect("/listings");
    };
    res.render("listings/show.ejs", { listing });

} ;

module.exports.createListing = async (req, res, next) => {
    let response = await geocodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit: 1
    })
    .send();

    let url = req.file.path;
    let filename = req.file.filename;
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = {url, filename};

    newListing.geometry = response.body.features[0].geometry;
    let savedListing = await newListing.save();

    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error", "Listing Does Not Exist!");
        return res.redirect("/listings");
    };
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload" , "upload/h_300,w_256");

    res.render("listings/edit.ejs", { listing, originalImageUrl });
};

module.exports.updateListing = async (req, res) => {
    let { id } = req.params;

    let listing = await Listing.findByIdAndUpdate(
        id, 
        { ...req.body.listing }, 
        { new: true, runValidators: true }  // ← add this
    );

    let response = await geocodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit: 1
    }).send();

    listing.geometry = response.body.features[0].geometry;

    if (typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };
    }

    await listing.save();

    req.flash("success", "Listing Updated Successfully!");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async(req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id, { ...req.body.listing });
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
};