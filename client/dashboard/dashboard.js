Template.dashboard.helpers({
  images: function () {
    if (!$.isEmptyObject(Meteor.user().profile)) {
      return Ftwimages.findOne(Meteor.user().profile.image) //Meteor.user().profile.image
    } else {
      return false
    }
  }
});