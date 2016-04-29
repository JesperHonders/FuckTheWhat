Template.home.helpers ({
  meldingen: function(){
    return Meldingen.find({status: "done"}, {limit: 5});
  },
  events: function(){
    return Events.find({}, {limit: 5});
  },
})



Template.home.onCreated(function bodyOnCreated() {
  Meteor.subscribe('Meldingen');
  Meteor.subscribe('Events');
});

Template.home.rendered = function () {    
    PleinData.find({plein: "plein1"}).observe({
        added: function(){
            var data = PleinData.find({plein: "plein1"}).fetch();
            Meteor.chartFunctions.updateChart(data[data.length -1].value, data[data.length -1].createdAt);
        }
    });
    
//    PleinData.find({plein: "plein2"}).observe({
//        added: function () {
//            var data = PleinData.find({plein: "plein2"}).fetch();
//            Meteor.chartFunctions.updateChart(data[data.length - 1].value, data[data.length - 1].createdAt);
//
//        }
//    });

    //setting canvas to var
    var ctx = document.getElementById("plein_chart").getContext("2d");


    //set data - replace the random() function with api data later
    var data = {
        labels: Meteor.chartFunctions.addLabels(1),
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
            {
                label: "Plein 1",
                fillColor: "rgba(151,187,205, 0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: Meteor.chartFunctions.addData('plein1'),
                //data: [random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random(), random()]
            }, 
            {
                label: "Plein 2",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: Meteor.chartFunctions.addData('plein2'),
            }]
    };

       //init linechart
    var pleinChart = new Chart(ctx).Line(data, Meteor.chartFunctions.options);

    Meteor.chartFunctions.showChart(pleinChart, data, ctx);
            

};

Template.home.events ({
  'click .meldingen' : function (event, target) {
    var article = event.currentTarget.childNodes[9];
    event.currentTarget.classList.toggle('icon_turn');
    article.classList.toggle('article_show');
  }
});