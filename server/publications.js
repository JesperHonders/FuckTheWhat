Meteor.publish('Pleinen', function pleinenPublication() {
  return Pleinen.find();
});
Meteor.publish("ftwimages", function(){ return Ftwimages.find(); });