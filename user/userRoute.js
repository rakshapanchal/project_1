
// ===================================Load Internal Modules================================================================================
const userRouter = require("express").Router()
const usrFacade = require('./userFacade')
const validators = require("./userValidators");
const resHndlr = require('../responseHandler')

//  ====================================Load Modules End======================================================================

/**
 * for signup 
 * calling facade signUpUser function from route 
 */
userRouter.route('/signup')
    .post([validators.validateSignup], (req, res) => {
        usrFacade.signUpUser(req, res).then((result) => {
            resHndlr.sendSuccess(res, result)
        }).catch((err) => {
            resHndlr.sendError(res, err)
        })
    });

/**
 * for signup 
 * calling facade login function from route 
 */
userRouter.route('/login')
    .post([validators.validateLogin], (req, res) => {
        let { emailId, password } = req.body
        usrFacade.login({ emailId, password }).then((result) => {
            resHndlr.sendSuccess(res, result)
        }).catch((err) => {
            resHndlr.sendError(res, err)
        })
    });

// =====================================================EXPORT Module========================================================================  
module.exports = userRouter;