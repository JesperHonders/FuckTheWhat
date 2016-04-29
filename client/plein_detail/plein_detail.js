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
    var name = event.target.name.value,
    date = event.target.date.value,
    pleinId = id;

    Meteor.call('addEvent', pleinId, name, date)

    event.target.name.value = '';
    event.target.date.value = '';


  }
})

