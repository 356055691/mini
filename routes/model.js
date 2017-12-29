'use strict';

exports.index = (req, res, next) => {
    let result = {
        title: 'ok!完美！！！'
    };

    return Promise.resolve(result);
};
