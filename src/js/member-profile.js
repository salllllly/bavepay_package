//@prepros-prepend template/top_menu.js
//@prepros-prepend plugin/echarts.min.js
$(document).ready(function () {
    window.setTimeout(function () {
        slider_ul_list("top-menu-ul");
    }, 600);

    $('#view').on('click', function () {
        $('.account-info').toggleClass('disable');
        $(this).toggleClass('active');
    })

    let topHeight = 120
    if ($(window).width() < 1025) {
        topHeight = 75
    }
    $('.tag-section li a').on('click', function () {
        const $_this = $(this).data("id")
        $('html,body').animate({
            scrollTop: $(`#${$_this}`).offset().top - topHeight
        }, 600);
    })

    //圓餅圖
    var dom = document.getElementById('chart-container');
    var myChart = echarts.init(dom, null, {
        renderer: 'canvas',
        useDirtyRect: false
    });

    var data = [{
        name: "USDT",
        value: 1005.10051005,
    }, {
        name: 'BNB',
        value: 310.310313
    }, {
        name: 'ETH',
        value: 234.234
    }, {
        name: 'BCH',
        value: 135.2
    }, {
        name: '其他',
        value: 100.7
    }]

    var option = {
        // title: {
        //     text: '所有幣別',
        //     textStyle: {
        //         fontSize: 20,
        //     },
        //     x: '23%',
        //     y: 'center'
        // },
        legend: {
            orient: 'vertical',
            right: 80,
            top: 80,
            icon: 'circle',
            itemHeight: 16, //圓圈大小
            itemWidth: 58,
            itemGap: 25,
            selectedMode: false,
            textStyle: {
                rich: {
                    name: {
                        color: "#404040",
                        width: 90,
                        fontSize: '24',
                        fontWeight: 'bold',
                    },
                    target: {
                        color: "#656565",
                        fontSize: '24',
                        fontWeight: '600',
                    }
                },
            },
            emphasis: {
                textShadowColor: '#000'
            },
            formatter: function (name) {
                var total = 0;
                var target;
                for (var i = 0, l = data.length; i < l; i++) {
                    total += data[i].value;
                    if (data[i].name == name) {
                        target = data[i].value;
                    }
                }
                var arr = [
                    name, target,
                ]
                return [`{name|${name}}`, `{target|${target}}`].join('  ')

            },
        },
        series: [{
            name: 'Testname',
            type: 'pie',
            color: ['#EF8B01', '#F1AC13', '#F9D17A', '#3BA7FF', '#6BB5F2'],
            radius: ['55%', '70%'],
            center: ['27%', '50%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center', //文字顯示於中間
                formatter: [
                    '{b|{b}}', '{c|{c}}'
                ].join('\n'),
                rich: {
                    b: {
                        color: '#404040',
                        fontSize: '32',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        height: 60
                    },
                    c: {
                        color: '#656565',
                        fontSize: '26',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        height: 20
                    },
                }
            },
            emphasis: {
                label: {
                    show: true,
                    color: '#fff'
                },
            },
            labelLine: {
                show: false
            },
            data
        }]
    };
    var optionPad = {
        legend: {
            orient: 'vertical',
            right: 0,
            top: 80,
            icon: 'circle',
            itemHeight: 16, //圓圈大小
            itemWidth: 58,
            itemGap: 25,
            selectedMode: false,
            textStyle: {
                rich: {
                    name: {
                        color: "#404040",
                        width: 90,
                        fontSize: '24',
                        fontWeight: 'bold',
                    },
                    target: {
                        color: "#656565",
                        fontSize: '24',
                        fontWeight: '600',
                    }
                },
            },
            emphasis: {
                textShadowColor: '#000'
            },
            formatter: function (name) {
                var total = 0;
                var target;
                for (var i = 0, l = data.length; i < l; i++) {
                    total += data[i].value;
                    if (data[i].name == name) {
                        target = data[i].value;
                    }
                }
                var arr = [
                    name, target,
                ]
                return [`{name|${name}}`, `{target|${target}}`].join('  ')

            },
        },
        series: [{
            name: 'Testname',
            type: 'pie',
            color: ['#EF8B01', '#F1AC13', '#F9D17A', '#3BA7FF', '#6BB5F2'],
            radius: ['55%', '70%'],
            center: ['27%', '50%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center', //文字顯示於中間
                formatter: [
                    '{b|{b}}', '{c|{c}}'
                ].join('\n'),
                rich: {
                    b: {
                        color: '#404040',
                        fontSize: '32',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        height: 60
                    },
                    c: {
                        color: '#656565',
                        fontSize: '26',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        height: 20
                    },
                }
            },
            emphasis: {
                label: {
                    show: true,
                    color: '#fff'
                },
            },
            labelLine: {
                show: false
            },
            data
        }]
    };
    var optionMobile = {
        legend: {
            orient: 'vertical',
            right: 'center',
            top: 'bottom',
            icon: 'circle',
            itemHeight: 12, //圓圈大小
            itemWidth: 50,
            itemGap: 10,
            selectedMode: false,
            textStyle: {
                rich: {
                    name: {
                        color: "#404040",
                        width: 60,
                        fontSize: '18',
                        fontWeight: 'bold',
                    },
                    target: {
                        color: "#656565",
                        fontSize: '18',
                        fontWeight: '600',
                    }
                },
            },
            emphasis: {
                textShadowColor: '#000'
            },
            formatter: function (name) {
                var total = 0;
                var target;
                for (var i = 0, l = data.length; i < l; i++) {
                    total += data[i].value;
                    if (data[i].name == name) {
                        target = data[i].value;
                    }
                }
                var arr = [
                    name, target,
                ]
                return [`{name|${name}}`, `{target|${target}}`].join('  ')

            },
        },
        series: [{
            name: 'Testname',
            type: 'pie',
            color: ['#EF8B01', '#F1AC13', '#F9D17A', '#3BA7FF', '#6BB5F2'],
            radius: ['55%', '70%'],
            center: ['50%', '35%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center', //文字顯示於中間
                formatter: [
                    '{b|{b}}', '{c|{c}}'
                ].join('\n'),
                rich: {
                    b: {
                        color: '#404040',
                        fontSize: '20',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        height: 40
                    },
                    c: {
                        color: '#656565',
                        fontSize: '16',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        height: 20
                    },
                }
            },
            emphasis: {
                label: {
                    show: true,
                    color: '#fff'
                },
            },
            labelLine: {
                show: false
            },
            data
        }]
    };
    // if (option && typeof option === 'object') {
    //     myChart.setOption(option);
    // }
    //resize
    window.addEventListener('resize', myChart.resize);
    $(window).on('resize', function () {
        resize()
    })

    function resize() {
        if ($(window).width() > 1200) {
            myChart.setOption(option);
        } else if ($(window).width() < 1200 && $(window).width() > 991) {
            myChart.setOption(optionPad);
        } else {
            myChart.setOption(optionMobile);
        }
    }
    resize()

    //圓圈初始
    myChart.on('mouseover', {
        seriesName: 'Testname'
    }, () => {
        $('.title').css('opacity', '0')
    })
    myChart.on('mouseout', {
        seriesName: 'Testname'
    }, () => {
        $('.title').css('opacity', '1')
    })
})