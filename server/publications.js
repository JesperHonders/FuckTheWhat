Meteor.publish('Pleinen', function pleinenPublication() {
  return Pleinen.find();
});

Meteor.publish('Events', function eventsPublication() {
  return Events.find();
})

Meteor.publish('Meldingen', function meldingenPublication() {
  return Meldingen.find();
})
