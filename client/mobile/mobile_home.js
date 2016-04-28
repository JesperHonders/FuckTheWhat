Template.mobile_home.helpers ({
  meldingen: function(){
    return Meldingen.find({});
  }
})

Template.mobile_home.onCreated(function bodyOnCreated() {
  Meteor.subscribe('Meldingen');
});
