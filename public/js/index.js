let $ = require('jquery');
let echarts = require('echarts');
let params = {
    name: 'index来的'
};

require('./common')(params);

let testObj = {
    init: function () {
        this.list();
        this.draw();
        console.log('indexjs-init');
    },
    list: function () {
        console.log('indexjs-list');
    },
    draw: function () {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('draw-main'));
        // 绘制图表

        let option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [20, 20, 36, 10, 10, 20]
            }]
        };

        myChart.setOption(option, true);
    }
};

$(
    function () {
        testObj.init();
    }
);
