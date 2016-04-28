Meteor.methods({
	'users.update'(text,type) {
		check(text,String);

		if (!Meteor.userId()) {
			throw new Meteor.Error('not-authorized');
		}
		var userId = Meteor.userId();
		var profileType = "profile."+type;
		var key = profileType;
		var input = {};
		input[key] = text;

     	Meteor.users.update(userId, {$set: input});
	}
})