Template.plein_detail.helpers ({
  pleinen: function(){

    return Pleinen.findOne({_id: id});
  }
})

Template.plein_detail.onCreated(function bodyOnCreated() {
  console.log(id)
  Meteor.subscribe('Pleinen');
});
