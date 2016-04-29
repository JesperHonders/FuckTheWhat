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
