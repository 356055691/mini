'use strict';

const testModel = require(`./model`);

exports.index = (req, res, next) => {
    testModel.index().then((result) => {
        res.render('index', result);
    }).catch(next);
};
