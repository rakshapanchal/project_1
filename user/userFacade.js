// ========================================Load Internal Modules========================================================

const userService = require('./userService')

// ==========================================End Load Modules=============================================================


/**calling service  signUpUser function from facade  */
function signUpUser(req, res) {
    return userService.signUpUser(req, res)
        .then((result) => {
            return result;
        })
}

/**calling service login function from facade  */
function login(loginInfo) {
    return userService.login(loginInfo)
        .then((result) => {
            return result;
        })
}

// ======================================Export Modules=================================================================

module.exports = {
    
    signUpUser,/**calling service signUpUser function from facade */

    login,/**calling service login finction from facade */
}