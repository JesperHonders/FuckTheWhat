Template.plein_detail.helpers ({
  pleinen: function(){
    return Pleinen.findOne({_id: id});
  },
  events: function(){
    return Events.find({pleinId: id})
  }
})

Template.plein_detail.events ({
  "submit .add-event": function(event){
    event.preventDefault()
    var name = event.target.name.value;
    var date = event.target.date.value;
    var pleinId = id;
    var pleinName = Pleinen.findOne({_id: id}).name

    Meteor.call('addEvent', pleinId, pleinName, name, date)

    event.target.name.value = '';
    event.target.date.value = '';


  }
})

Template.plein_detail.rendered = function() {

    //setting canvas to var
    var ctx = document.getElementById("plein_detail_chart").getContext("2d");


    //set data - replace the random() function with api data later
    var data = {
        labels: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
        datasets: [
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

    Meteor.chartFunctions.showChart(pleinChart);
}
