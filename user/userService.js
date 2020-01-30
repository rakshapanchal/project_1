
// ========================================Load Internal Modules========================================================

const userDao = require('./userDao');
const userMsg = require('./userConstants').messages
const userMapper = require('./userMapper')
const appUtils = require('../appUtils')
const jwtHandler = require('../jwtHandler');

// ==========================================End Load Modules=============================================================



/**for register new users */
function signUpUser(req, res) {
    var { emailId, contactNumber, userName, password } = req.body
    let usrDetails = { emailId, contactNumber, userName, password }
    /****************************for check emailId is already exist or not ***************************/
    return userDao.checkIfExist({ emailId: emailId }).then((exist) => {
        if (exist) {
            return userMapper.bedRequestRes(userMsg.email_exist)
        } else {
            /****************************user password convert into hashpassword ***************************/
            return appUtils.generateSaltAndHashForPassword(password).then((result) => {
                if (result) {
                    usrDetails.password = result;
                    return userDao.registerUser(usrDetails).then((data) => {
                        return userMapper.registerMapping(userMsg.user_created, data);
                    });
                }
            });
        }
    }).catch((err) => {
        return userMapper.internalServerError()
    })
}

/**for login user */
function login(loginInfo) {
    /****************************for check emailId is exist ***************************/
    return userDao.checkIfExist({ emailId: loginInfo.emailId }).then((isExist) => {
        if (isExist) {
            /***************************for user verify password ***************************/
            return appUtils.verifyPassword(loginInfo.password, isExist).then((valid) => {
                if (valid) {
                    /**********************************for generate token ****************************/
                    return jwtHandler.genUsrToken({ firstName: isExist.firstName, userId: isExist._id, emailId: isExist.emailId, role: isExist.role }).then((jwt) => {
                        let { emailId, userName, status } = isExist
                        return userMapper.responseMapping(userMsg.login_Successfully, { emailId, userName, status, jwt: jwt });
                    });
                } else {
                    return userMapper.bedRequestRes(userMsg.password_Mismatch);
                }
            });
        } else {
            return userMapper.dataNotFound(userMsg.users_Not_Found);
        }
    }).catch((err) => {
        return userMapper.internalServerError()
    })
}

// ======================================Export Modules=================================================================

module.exports = {
    signUpUser,/**for register new user*/

    login,/**for login user */
}