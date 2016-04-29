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


Template.home.onDestroyed(function(){
  observer.stop(); 
//  observer2.stop();
});

Template.home.rendered = function () {  
    var curTime = Date.now();
    plein1 = -1;
    plein2 = -1;
    
    
    observer = PleinData.find({createdAt: {$gt: curTime}}).observe({
        added: function(document){
            console.log(document);
            pleinNumber = document.plein;
            
            if(pleinNumber == 'plein1'){
                plein1 = document.value;
            }else{
                plein2 = document.value;
            }
            if(plein1 > 0 && plein2 > 0){
                Meteor.chartFunctions.updateChart([plein1, plein2], document.createdAt);
                plein1 = -1;
                plein2 = -1;
            }
        }
    });
    
    
//    
//    observer2 = PleinData.find({plein: "plein2", createdAt: {$gt: curTime}}).observe({
//        added: function () {
//            var data = PleinData.find({plein: "plein2"}).fetch();
//            Meteor.chartFunctions.updateChart(data[data.length - 1].value, data[data.length - 1].createdAt, 'plein2');
//
//        }
//    });

    //setting canvas to var
    var ctx = document.getElementById("plein_chart").getContext("2d");


    //set data - replace the random() function with api data later
    var data = {
        labels: Meteor.chartFunctions.addLabels(1),
        datasets: [
            {
                label: "Plein 1",
                fillColor: "rgba(151,187,205, 0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: Meteor.chartFunctions.addData('plein1'),
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
    var article = event.currentTarget.childNodes[11];
   
    event.currentTarget.classList.toggle('icon_turn');
    article.classList.toggle('article_show');
  }
});