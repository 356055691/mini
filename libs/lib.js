'use strict';

const Api = require('./api');

const lib = {
    global () {
        global.lijing = this.init();
    },
    init () {
        this.API = new Api();
        return this;
    }
};

module.exports = lib;
