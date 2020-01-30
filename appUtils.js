// ========================================Load Internal Modules========================================================

var bcrypt = require('bcryptjs');
// ==========================================End Load Modules=============================================================

/**for check valid email */
function isValidEmail(data) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(data)
}

/**for check valid password */
function isValidPassword(data) {
    let regex = /^(?=.*[A-z])(?=.*[0-9])(?=.*[@#$_-])\S{8,20}$/;
    return regex.test(data)
}

/**for convert hashpassword */
function generateSaltAndHashForPassword(password) {
    return bcrypt.hash(password, 10);
}

/**for verify password */
function verifyPassword(user, isExist) {
    return bcrypt.compare(user, isExist.password);
}

// ======================================Export Modules=================================================================

module.exports = {
    isValidEmail,/**for check valid email */

    isValidPassword,/**for check valid password */

    generateSaltAndHashForPassword,/**for convert hashpassword */

    verifyPassword/**for verify password */

}