Template.home.helpers ({
  meldingen: function(){
    return Meldingen.find({});
  }
})

Template.home.onCreated(function bodyOnCreated() {
  Meteor.subscribe('Meldingen');
});
