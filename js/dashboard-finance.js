"use strict";
var MONTHS = ['بهمن', 'دی', 'اسفند', 'فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر'];

var config5 = {
    type: 'line',
    data: {
        labels: ['دی', 'بهمن', 'اسفند', 'فروردین', 'اردیبهشت', 'خرداد', 'تیر'],
        datasets: [{
            label: 'اولین مجموعه داده من',
            backgroundColor: window.chartColors.red,
            borderColor: window.chartColors.red,
            data: [
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor()
					],
            fill: false,
				}]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        spanGaps: false,
        elements: {
            line: {
                tension: 0.000001
            }
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                ticks: {
                    display: false,
                },
                display: true,
                scaleLabel: {
                    display: false,
                    labelString: 'Month'
                }
					}],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: false,
                    labelString: 'Value'
                }
					}]
        }
    }
};



window.onload = function () {

    var ctx5 = document.getElementById('linechartarea').getContext('2d');
    window.myLine2 = new Chart(ctx5, config5);

    setTimeout(function () {
        $('.smallsparkchart').sparkline(myvalues, {
            type: 'line',
            width: '80px',
            height: '24',
            spotColor: '#bf0000',
            minSpotColor: undefined,
            maxSpotColor: undefined,
            highlightSpotColor: undefined,
            highlightLineColor: undefined
        });
    }, 1000);


};

setInterval(function () {
    config5.data.datasets.forEach(function (dataset) {
        dataset.data = dataset.data.map(function () {
            return randomScalingFactor();
        });
    });

    window.myLine2.update();
}, 1500);



/* footable  */
$(".footable").footable({
    "paging": {
        "enabled": true,
        "position": "center"
    }
});


/* vector map */
$('#mapwrap').vectorMap({
    map: 'world_mill',
    regionStyle: {
        initial: {
            fill: '#7a99ff'
        }
    }
});
/* date range picker */
$(function () {

    var start = moment().subtract(29, 'days');
    var end = moment();

    function cb(start, end) {
        $('#reportrange span').html(start.format('MM/D/YY') + ' to ' + end.format('MM/D/YY'));
    }

    $('#reportrange').daterangepicker({
        startDate: start,
        endDate: end,
        opens: 'left',
        ranges: {
            'امروز': [moment(), moment()],
            'دیروز': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            '7 روز پیش': [moment().subtract(6, 'days'), moment()],
            '30 روز پیش': [moment().subtract(29, 'days'), moment()],
            'این ماه': [moment().startOf('month'), moment().endOf('month')],
            'ماه پیش': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    }, cb);

    cb(start, end);

});

$(function () {
    $('input[name="daterange"]').daterangepicker({
        opens: 'left'
    }, function (start, end, label) {
        console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
});

/* swiper control */
var mySwiper = new Swiper('.swiper-product', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

/* Circular progress */
$('.progress-success').circleProgress({
    fill: {
        gradient: ['#07ba7d', '#0fd793']
    },
    lineCap: 'butt'
}).on('circle-animation-progress', function (event, progress, stepValue) {
    $(this).find('strong').html(Math.round(100 * progress * stepValue) + '<i>%</i>');
});

$('.progress-danger').circleProgress({
    fill: {
        gradient: ['#cf0723', '#f63b55']
    },
}).on('circle-animation-progress', function (event, progress, stepValue) {
    $(this).find('strong').html(Math.round(100 * progress * stepValue) + '<i>%</i>');
});

$('.progress-warning').circleProgress({
    fill: {
        gradient: ['#ff7800', '#f5a811']
    },
    lineCap: 'butt'
}).on('circle-animation-progress', function (event, progress, stepValue) {
    $(this).find('strong').html(Math.round(100 * progress * stepValue) + '<i>%</i>');
});

$('.progress-primary').circleProgress({
    fill: {
        gradient: ['#4a19c8', '#7979ff']
    },
    lineCap: 'butt'
}).on('circle-animation-progress', function (event, progress, stepValue) {
    $(this).find('strong').html(Math.round(100 * progress * stepValue) + '<i>%</i>');
});

/* Sparklines can also take their values from the first argument   passed to the sparkline() function */
var myvalues = [6, 7, 5, 5, 4, 5, 7, 6, 7, 5, 6, 4, 5, 4];
$('.dynamicsparkline').sparkline(myvalues, {
    type: 'bar',
    width: '80px',
    height: '15',
    barColor: '#999999',
    barWidth: '2',
    barSpacing: 2
});
