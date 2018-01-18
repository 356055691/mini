'use strict';

const testModel = require(`../models/index`);

exports.index = (req, res, next) => {
    let params = {
        name: '首页的首页'
    };

    let resData = {
        page: 'index'
    };

    testModel.index(params).then((result) => {
        res.render('index/index', Object.assign(result, resData));
    }).catch(next);
};
