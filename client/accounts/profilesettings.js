Template.profile_settings.events({
  'submit .submit-title'(event) {
    // Prevent default browser form submit
    event.preventDefault();
 
    // Get value from form element
    var target = event.target;
    var text = target.text.value;
 
    Meteor.call('users.update', text,"titel");
 
    // Clear form
    target.text.value = '';
  },
  'change .myFileInput' (event, template) {
    console.log("change");
    FS.Utility.eachFile(event, function(file) {
          
      Ftwimages.insert(file, function (err, fileObj) {
        if (err){
           // handle error
        } else {
          var userId = Meteor.userId();
          var imageURL = {
            "profile.image": fileObj._id// "/cfs/files/images/" +
          };
          Meteor.users.update(userId, {$set: imageURL});
        }
      })
    
    });
  }
});