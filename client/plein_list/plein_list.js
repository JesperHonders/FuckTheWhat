Template.plein_list.helpers ({
  Pleinen: function(){
    return Pleinen.find({});
  }
})


Template.plein_list.onCreated(function bodyOnCreated() {
  Meteor.subscribe('Pleinen');
});
