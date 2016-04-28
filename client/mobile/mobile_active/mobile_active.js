Template.mobile_active.helpers ({
  meldingen: function(){
    return Meldingen.find({});
  }
})

Template.mobile_active.onCreated(function bodyOnCreated() {
  Meteor.subscribe('Meldingen');
});
