Meteor.publish('Pleinen', function pleinenPublication() {
  return Pleinen.find();
});

Meteor.publish('Events', function eventsPublication() {
  return Events.find();
})

Meteor.publish('Meldingen', function meldingenPublication() {
  return Meldingen.find();
})

// db.Pleinen.insert({
// 	name: "Beukenweg",
// 	image: "plein1.png"
// })
// db.Pleinen.insert({
// 	name: "Steve Bikoplein",
// 	image: "plein2.png"
// })
// db.Pleinen.insert({
// 	name: "Mariotteplein",
// 	image: "plein3.png"
// })