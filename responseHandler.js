"use strict";

//========================== Load Modules Start ===========================

//========================== Load Internal Module =========================

// Load exceptions
var constants = require("./constants");
var APIResponse = require("./model/APIResponse");

//========================== Load Modules End =============================

/**for error response */
function sendError(res, err) {
    // if error doesn't has sc than it is an unhandled error,
    // log error, and throw intrnl server error
    if (!err.errorCode) {
        console.error(err, "unhandled error");
    }

    var result = new APIResponse(constants.STATUS_CODE.ERROR, err);
    _sendResponse(res, result);
}

/**for success response */
function sendSuccess(res, rslt) {
    var result = new APIResponse(constants.STATUS_CODE.SUCCESS, rslt);
    _sendResponse(res, result);
}

//========================== Exposed Action Start ==========================

module.exports = {

    sendError, /**for error response */

    sendSuccess/**for success response */
};

//========================== Exposed Action End ==========================

function _sendResponse(res, rslt) {
    // send status code 200
    return res.send(rslt);
}