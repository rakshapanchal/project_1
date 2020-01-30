
//Load user routes
const userRouter = require('../user/userRoute')

//========================== Load Modules End ==============================================

//========================== Export Module Start ====== ========================

module.exports = function (app) {

    // Attach users Routes
    app.use('/api/v1/user', userRouter);

};