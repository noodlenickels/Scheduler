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
            name: "Main",
            colorByPoint: true,
            data: [
                {
                    name: "Task 1",
                    y: 62.74,
                    drilldown: "Task 1"
                },
                {
                    name: "Task 2",
                    y: 10.57,
                    drilldown: "Task 2"
                },
                {
                    name: "Task 3",
                    y: 7.23,
                    drilldown: "Task 3"
                },
                {
                    name: "Task 4",
                    y: 5.58,
                    drilldown: "Task 4"
                },
                {
                    name: "Task 5",
                    y: 4.02,
                    drilldown: "Task 5"
                }
            ]
        }
    ],
    drilldown: {
        breadcrumbs: {
            position: {
                align: 'right'
            }
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
            },
            {
                name: "Task 2",
                id: "Task 2",
                data: [
                    [
                        "1",
                        1.02
                    ],
                    [
                        "2",
                        7.36
                    ],
                    [
                        "3",
                        0.35
                    ],
                    [
                        "4",
                        0.11
                    ],
                    [
                        "5",
                        0.1
                    ],
                    [
                        "6",
                        0.95
                    ],
                    [
                        "7",
                        0.15
                    ],
                    [
                        "8",
                        0.1
                    ],
                    [
                        "9",
                        0.31
                    ],
                    [
                        "10",
                        0.12
                    ]
                ]
            },
            {
                name: "Task 3",
                id: "Task 3",
                data: [
                    [
                        "1",
                        6.2
                    ],
                    [
                        "2",
                        0.29
                    ],
                    [
                        "3",
                        0.27
                    ],
                    [
                        "4",
                        0.47
                    ]
                ]
            },
            {
                name: "Task 4",
                id: "Task 4",
                data: [
                    [
                        "1",
                        3.39
                    ],
                    [
                        "2",
                        0.96
                    ],
                    [
                        "3",
                        0.36
                    ],
                    [
                        "4",
                        0.54
                    ],
                    [
                        "5",
                        0.13
                    ],
                    [
                        "6",
                        0.2
                    ]
                ]
            },
            {
                name: "Task 5",
                id: "Task 5",
                data: [
                    [
                        "1",
                        2.6
                    ],
                    [
                        "2",
                        0.92
                    ],
                    [
                        "3",
                        0.4
                    ],
                    [
                        "4",
                        0.1
                    ]
                ]
            }
        ]
    }
});