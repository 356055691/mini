'use strict';

class baseClass {
    constructor () {
        this.tips = '你继承我了你知道吗？';
    }

    test () {
        console.log('这是baseClass的test方法！');
    }
}

module.exports = baseClass;
