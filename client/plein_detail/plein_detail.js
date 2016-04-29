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
