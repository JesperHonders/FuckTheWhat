Template.plein_detail.helpers ({
    meldingen: function () {
        return Meldingen.find({name: id});
    },
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
        labels: Meteor.chartFunctions.addLabels(1),
        datasets: [
            {
                label: "Plein 1",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: Meteor.chartFunctions.addData(Pleinen.findOne({_id: id}).image.replace('.png','')),
            }]
    };

       //init linechart
    var pleinChart = new Chart(ctx).Line(data, Meteor.chartFunctions.options);

    Meteor.chartFunctions.showChart(pleinChart);
}
Template.plein_detail.events ({
  'click .meldingen' : function (event, target) {
    console.log(this)

    var article = event.currentTarget.childNodes[9];
   console.log(article);
   console.log(event.currentTarget.childNodes)
    event.currentTarget.classList.toggle('icon_turn');
    article.classList.toggle('article_show');
  }
});