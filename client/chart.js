Template.home.rendered = function () {

    //setting canvas to var
    var ctx = document.getElementById("plein_chart").getContext("2d");

    //bunch of options
    var options = {
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

    };

    //set data - replace the random() function with api data later
    var data = {
        labels: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
        datasets: [{
                label: "Plein 1",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                //data: chartFunctions.addData(1);
                data: [random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random()]
            }, {
                label: "Plein 2",
                fillColor: "rgba(151,187,205, 0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                //data: chartFunctions.addData(2);
                data: [random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random()]
            }, {
                label: "Plein 3",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                //data: chartFunctions.addData(3);
                data: [random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random()]
            }]
    };

    
    //old data for now, for some reason cant store the old var as it updates - need to get this out of collection?
    var sensorData = {
        label: "Plein 1",
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        //data: chartFunctions.addData(3);
        data: [random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random()]
    };

    var chartFunctions = {
        addData: function(sensor){
                //fill in apiData here based on which sensor is called
                var data;
                var apiData;
                for (var i; i < apiData.length; i++) {
                    chartFunctions.data.push(apiData[i]);
                }
                return data
        },
        //create click listener for checkboxes
        showChart: function () {
            var pleinCheckbox = document.querySelectorAll('[id*="plein_checkbox"]');
            for (i = 0; i < pleinCheckbox.length; i++) {
                pleinCheckbox[i].addEventListener('click', function () {
                    //take last digit of id for selected line
                    var selectedLine = this.id.substr(-1);
                    //check if checked
                    if (this.checked == true) {
                        data.datasets[selectedLine] = {};

                        pleinChart.destroy();
                        pleinChart = new Chart(ctx).Line(data, options);
                        //if not checked add old data
                    } else {
                        data.datasets[selectedLine] = sensorData;
                        pleinChart.destroy();
                        pleinChart = new Chart(ctx).Line(data, options);
                    }
                });
            }
        },
        //add new value and (optionally) delete the first value
        updateChart: function () {
            if (data.datasets[0].data.length > 23) {
                pleinChart.removeData();
            }
            pleinChart.addData()
        },
    }

    chartFunctions.showChart();

    //random number for testdata, can make an api call out of this
    function random() {
        return Math.floor((Math.random() * 100) + 1);
    }

    var newsfeedFunctions = {
        newsfeed: ['Overlast op plein 2 - 12:00', 'Overlast op plein 1 - 14:00'],
        addItems: function () {
            for (var i = 0; i < newsfeedFunctions.newsfeed.length; i++) {
               document.getElementById('newsfeed').innerHTML = '<span>'+newsfeedFunctions.newsfeed[i]+'</span>';
            }
        }
    }

    newsfeedFunctions.addItems();
    
    
    
    //init linechart
    var pleinChart = new Chart(ctx).Line(data, options);
};
