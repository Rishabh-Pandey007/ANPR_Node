const All_Routes = (app)=> {
    app.use(
        '/v1/',
            require('../routes/auth'),
        )
};

module.exports = All_Routes;