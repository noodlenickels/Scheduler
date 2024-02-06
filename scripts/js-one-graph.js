// Create the chart
Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Processes'
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Total time'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}s'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}s</b><br/>'
    },

    series: [
        {
            name: "Task 1",
            id: "Task 1",
            data: [
                [
                    "1",
                    0.1
                ],
                [
                    "2",
                    1.3
                ],
                [
                    "3",
                    53.02
                ],
                [
                    "4",
                    1.4
                ],
                [
                    "5",
                    0.88
                ],
                [
                    "6",
                    0.56
                ],
                [
                    "7",
                    0.45
                ],
                [
                    "8",
                    0.49
                ],
                [
                    "9",
                    0.32
                ],
                [
                    "10",
                    0.29
                ],
                [
                    "11",
                    0.79
                ],
                [
                    "12",
                    0.18
                ],
                [
                    "13",
                    0.13
                ],
                [
                    "14",
                    2.16
                ],
                [
                    "15",
                    0.13
                ],
                [
                    "16",
                    0.11
                ],
                [
                    "17",
                    0.17
                ],
                [
                    "18",
                    0.26
                ]
            ]
        }
    ]
});