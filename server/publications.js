Meteor.publish('Pleinen', function pleinenPublication() {
  return Pleinen.find();
});
