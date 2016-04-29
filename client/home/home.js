Template.home.helpers ({
  meldingen: function(){
    return Meldingen.find({status: "done"}, {limit: 5});
  },
  events: function(){
    return Events.find({}, {limit: 5});
  }
})



Template.home.onCreated(function bodyOnCreated() {
  Meteor.subscribe('Meldingen');
  Meteor.subscribe('Events');
});

Template.home.rendered = function () {    
    
    //setting canvas to var
    var ctx = document.getElementById("plein_chart").getContext("2d");


    //set data - replace the random() function with api data later
    var data = {
        labels: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
        datasets: [
//            {
//                label: "Plein 1",
//                fillColor: "rgba(220,220,220,0.2)",
//                strokeColor: "rgba(220,220,220,1)",
//                pointColor: "rgba(220,220,220,1)",
//                pointStrokeColor: "#fff",
//                pointHighlightFill: "#fff",
//                pointHighlightStroke: "rgba(220,220,220,1)",
//                data: chartFunctions.addData(1),
//                //data: [random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random()]
//            },
//            {
//                label: "Plein 2",
//                fillColor: "rgba(151,187,205, 0.2)",
//                strokeColor: "rgba(151,187,205,1)",
//                pointColor: "rgba(151,187,205,1)",
//                pointStrokeColor: "#fff",
//                pointHighlightFill: "#fff",
//                pointHighlightStroke: "rgba(220,220,220,1)",
//                data: chartFunctions.addData(2),
//                //data: [random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random()]
//            }, 
            {
                label: "Plein 1",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: Meteor.chartFunctions.addData(1),
            }]
    };

       //init linechart
    var pleinChart = new Chart(ctx).Line(data, Meteor.chartFunctions.options);

    Meteor.chartFunctions.showChart(pleinChart, data, ctx);
};

Template.mobile_home.events ({

});