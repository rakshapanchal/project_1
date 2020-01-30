
const status = {
    ACTIVE: 'ACTIVE',
    INACTIVE: 'INACTIVE',
    PENDING: "PENDING"
}

const http_code = {
    created: 201,
    ok: 200,
    unAuthorized: 401,
    dataNotFound: 404,
    forbidden: 403,
    badRequest: 400,
    internalServerError: 500
}

const messages = {
    email_Cant_Empty: "Please enter valid emailId.",
    userName_Cant_Empty: "Please enter valid UserName.",
    pwd_Cant_Empty: "Please enter valid password.",
    user_created: "Register successfully",
    email_exist: "EmailId is already exist",
    contactNumber_Cant_Empty: "Please enter valid contactNumber.",
    InternalServerError: "Internal server error",
    users_Not_Found: "User not found",
    unAuthAccess: "UnAuthorization Access",
    password_Mismatch: "Password Mismatch",
    login_Successfully: "Login Successfully",
    ok: "ok"
}

module.exports = {
    status,

    http_code,

    messages
}