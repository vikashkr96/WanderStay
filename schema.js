const Joi = require('joi');

module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        country: Joi.string().required(),
        price: Joi.number().required().min(0).messages({
            "number.min": "Price cannot be negative.",
            "number.base": "Price must be a valid number.",
            "any.required": "Price is required."
        }),
        image: Joi.string().allow("", null),
        category: Joi.string().valid(
            "trending",
            "rooms",
            "iconic_cities",
            "beachfront",
            "mountains",
            "cabins",
            "farms",
            "camping",
            "pools",
            "luxury",
            "tiny_homes",
            "lake",
            "historical",
            "arctic",
            "desert"
        ).required()
    }).required()
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().required()
    }).required()
});