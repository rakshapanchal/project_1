
//========================== Load Modules Start ===========================
const userMapper = require("./userMapper")
const userMsg = require("./userConstants").messages
const appUtils = require('../appUtils')
const resHndlr = require('../responseHandler')
//========================== Load Modules End =============================



//========================== Export Module Start ===========================


/**
 * for check requested signup body details is valid
 * @param {object} req request body details
 * @param {object} res response
 * @param {*} next next 
 */
var validateSignup = function (req, res, next) {
    var { emailId, contactNumber, userName, password } = req.body
    if (!userName) {
        return resHndlr.sendError(res, userMapper.bedRequestRes(userMsg.userName_Cant_Empty))
    } else if (!appUtils.isValidEmail(emailId)) {
        return resHndlr.sendError(res,userMapper.bedRequestRes(userMsg.email_Cant_Empty))
    } else if (!appUtils.isValidPassword(password)) {
        return resHndlr.sendError(res,userMapper.bedRequestRes(userMsg.pwd_Cant_Empty))
    } else if (!contactNumber) {
        return resHndlr.sendError(res,userMapper.bedRequestRes(userMsg.contactNumber_Cant_Empty))
    } else {
        next();
    }
};


/**
 * for check requested login user body details is valid
 * @param {object} req request body details
 * @param {object} res response
 * @param {*} next next 
 */
var validateLogin = function (req, res, next) {
    var { emailId, password } = req.body
    if (!appUtils.isValidEmail(emailId)) {
        return resHndlr.sendError(res,userMapper.bedRequestRes(userMsg.email_Cant_Empty))
    } else if (!appUtils.isValidPassword(password)) {
        return resHndlr.sendError(res,userMapper.bedRequestRes(userMsg.pwd_Cant_Empty))
    } else {
        next();
    }
}


//========================== Export Module Start ==============================

module.exports = {
    validateSignup,/**for check requested signup body details is valid **/

    validateLogin,/**for check valid login details */
};

//========================== Export Module End ===============================

