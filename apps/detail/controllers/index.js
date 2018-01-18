'use strict';

const testModel = require(`../models/index`);

exports.index = (req, res, next) => {
    let params = {
        name: '详情页的首页'
    };

    let resData = {
        page: 'detail'
    };

    testModel.index(params).then((result) => {
        res.render('detail/index', Object.assign(result, resData));
    }).catch(next);
};
