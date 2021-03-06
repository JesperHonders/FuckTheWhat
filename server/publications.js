Meteor.publish('Pleinen', function () {

	if (Pleinen.find().count()<=0) {
		Pleinen.insert({
			_id: "plein1",
			name: "Beukenweg",
			image: "plein1.png"
		})
		Pleinen.insert({
			_id: "plein2",
			name: "Steve Bikoplein",
			image: "plein2.png"
		})
		Pleinen.insert({
			_id: "plein3",
			name: "Mariotteplein",
			image: "plein3.png"
		})
	}
  	return Pleinen.find();
});

Meteor.publish("ftwimages", function(){
	if (this.userId) {
		var profileImg = Meteor.users.findOne(this.userId).profile.image;
		return Ftwimages.find({_id:profileImg});
	} else {
		return [];
	}
});


Meteor.publish('Events', function() {
  return Events.find();
})

Meteor.publish('Meldingen', function() {
  return Meldingen.find();
})

Meteor.publish('PleinData', function() {
  return PleinData.find();
})
