module.exports = app => {
    var index = require('./apps/index/index');
    var detail = require('./apps/detail/index');

    app.use('/', index);
    app.use('/detail', detail);
};
