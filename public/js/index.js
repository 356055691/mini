let $ = require('jquery');

console.log('index');

let testObj = {
    init: function () {
        this.list();
        console.log('back!!!12121212121212');
    },
    list: function () {
        console.log('list');
    }
};

$(
    function () {
        testObj.init();
    }
);
