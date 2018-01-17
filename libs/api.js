'use strict';

const rp = require('request-promise');
const baseClass = require('./baseClass');
require('colors');

class Http extends baseClass {
    constructor () {
        super();
        this.haha = '';
        this.test();
        console.log(this.tips);
    }

    get (data) {
        let debug = `debug: ${data.url}`;
        let result = rp(data);

        console.log(debug.blue);
        return result;
    }
};

module.exports = Http;
