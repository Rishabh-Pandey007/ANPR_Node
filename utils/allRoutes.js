const All_Routes = (app)=> {
    app.use(
        '/v1/',
            require('../routes/auth'),
            require('../routes/logs'),
        )
};

module.exports = All_Routes;