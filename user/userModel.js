/**Importing mongoose */
const mongoose = require("mongoose");

const status = require('./userConstants').status

const constants = require('../constants')

var Schema = mongoose.Schema;

var userSchema = new Schema({

    userName: { type: String },

    contactNumber: { type: String },

    emailId: { type: String, required: true },

    status: { type: String, enum: [status.ACTIVE, status.INACTIVE, status.PENDING], default: status.ACTIVE },

    password: { type: String, required: true },

    role: { type: String, enum: [constants.ROLE.ADMIN, constants.ROLE.USER], default: constants.ROLE.USER },

    createdAt: { type: Date, default: Date.now },

    updatedAt: { type: Date }
})

//Export User  module
User = module.exports = mongoose.model(constants.DB_COLLECTION_NAME.USER, userSchema)
