Meteor.chartFunctions = {
    pleinChart: undefined,
    data: undefined,
    options: {
        ///Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines: true,
        //String - Colour of the grid lines
        scaleGridLineColor: "rgba(0,0,0,.05)",
        //Number - Width of the grid lines
        scaleGridLineWidth: 1,
        //Boolean - Whether to show horizontal lines (except X axis)
        scaleShowHorizontalLines: true,
        //Boolean - Whether to show vertical lines (except Y axis)
        scaleShowVerticalLines: true,
        //Boolean - Whether the line is curved between points
        bezierCurve: true,
        //Number - Tension of the bezier curve between points
        bezierCurveTension: 0.4,
        //Boolean - Whether to show a dot for each point
        pointDot: true,
        //Number - Radius of each point dot in pixels
        pointDotRadius: 4,
        //Number - Pixel width of point dot stroke
        pointDotStrokeWidth: 1,
        //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
        pointHitDetectionRadius: 20,
        //Boolean - Whether to show a stroke for datasets
        datasetStroke: true,
        //Number - Pixel width of dataset stroke
        datasetStrokeWidth: 2,
        //Boolean - Whether to fill the dataset with a colour
        datasetFill: true,
        responsive: true,
        maintainAspectRatio: false,
        //String - A legend template
        legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

    },
    addData: function (pleinnumber) {

        //fill in apiData here based on which sensor is called
        var data = [];
        var apiData = PleinData.find({plein: "plein1"}).fetch();
        if (apiData[apiData.length - 25] != undefined) {
            for (var i = apiData.length - 1; i > apiData.length - 25; i--) {
                data.push(apiData[i].value);
            }
        } else {
            for (var i = 0; i < 25; i++) {
                data.push(random());
            }
            console.log('Fake data - Could not connect to API')
        }
        data.reverse();
        return data;
    },
    addLabels: function (pleinnumber) {

        //fill in apiData here based on which sensor is called
        var data = [];
        var apiData = PleinData.find({plein: "plein1"}).fetch();
        if (apiData[apiData.length - 25] != undefined) {
            for (var i = apiData.length - 1; i > apiData.length - 25; i--) {
                var date = new Date(apiData[i].createdAt);
                var formattedDate = date.toISOString();
                data.push(formattedDate);
            }
        } else {
            for (var i = 0; i < 25; i++) {
                data.push(random());
            }
            console.log('Fake data - Could not connect to API')
        }
        data.reverse();
        return data;
    },
    //create click listener for checkboxes
    showChart: function (pleinChart, data, ctx) {
        Meteor.chartFunctions.pleinChart = pleinChart;
        Meteor.chartFunctions.data = data;
        Meteor.chartFunctions.ctx = ctx;
        
        var pleinCheckbox = document.querySelectorAll('[id*="plein_checkbox"]');
        for (i = 0; i < pleinCheckbox.length; i++) {
            pleinCheckbox[i].addEventListener('click', function () {
                //take last digit of id for selected line
                var selectedLine = this.id.substr(-1);
                //check if checked
                if (this.checked == true) {
                    var newData = data;
                    newData.datasets[selectedLine] = {};

                    pleinChart.destroy();
                    pleinChart = new Chart(ctx).Line(newData, Meteor.chartFunctions.options);
                    //if not checked add old data
                } else {
                    data.datasets[selectedLine].data = Meteor.chartFunctions.addData(1);
                    pleinChart.destroy();
                    pleinChart = new Chart(ctx).Line(data, Meteor.chartFunctions.options);
                }
            });
        }
    },
    //add new value and (optionally) delete the first value
    updateChart: function (id, value, plein) {
        Meteor.chartFunctions.pleinChart.removeData();
        Meteor.chartFunctions.pleinChart.addData([value], [23])
    },
}


//random number for testdata, can make an api call out of this
function random() {
    return Math.floor((Math.random() * 100) + 1);
}