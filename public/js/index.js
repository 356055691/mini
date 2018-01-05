let $ = require('jquery');
let params = {
    name: 'index来的'
};

require('./common')(params);

let testObj = {
    init: function () {
        this.list();
        console.log('indexjs-init');
    },
    list: function () {
        console.log('indexjs-list');
    }
};

$(
    function () {
        testObj.init();
    }
);
