'use strict';

const testModel = require(`./model`);

exports.index = (req, res, next) => {
    let params = {
        name: '李孟想'
    };

    testModel.index(params).then((result) => {
        res.render('index', result);
    }).catch(next);
};
