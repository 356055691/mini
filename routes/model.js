'use strict';

const api = global.lijing.API;

const _detail1 = (params) => {
    return api.get({
        url: 'http://service-test3.yohops.com:9999/operations/api/v5/resource/get?app_version=6.3.0&client_type=h5&content_code=5523199f921ee2297b509397a224d9e8&gender=1%2C3&os_version=yohobuy%3Ah5&screen_size=720x1280&udid=5fa0051b-d271-4161-a545-ba91be139f4c&v=7&client_secret=ebe015ae084f8ba875db8153fd62cd30',
        json: true
    }).then((result) => {
        return result;
    });
};

const _detail2 = (params) => {
    return api.get({
        url: 'http://service-test3.yohops.com:9999/operations/api/v5/resource/get?app_version=6.3.0&client_type=h5&content_code=5523199f921ee2297b509397a224d9e8&gender=1%2C3&os_version=yohobuy%3Ah5&screen_size=720x1280&udid=5fa0051b-d271-4161-a545-ba91be139f4c&v=7&client_secret=ebe015ae084f8ba875db8153fd62cd30',
        json: true
    }).then((result) => {
        return result;
    });
};

exports.index = (params) => {
    return Promise.all([
        _detail1(),
        _detail2()
    ]).then((result) => {
        let resu = {
            title: ''
        };

        resu.title = result[0].data[0].data[0].title + result[1].data[0].data[0].title;
        return resu;
    });
};
