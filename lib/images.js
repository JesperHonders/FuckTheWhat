var imageStore = new FS.Store.GridFS("ftwimages");

Ftwimages = new FS.Collection("ftwimages", {
 stores: [imageStore]
});


Ftwimages.allow({
 insert: function(){
 	return true;
 },
 update: function(){
 return true;
 },
 remove: function(){
 return true;
 },
 download: function(){
 return true;
 }
});
Meteor.users.allow({
  update: function (userId, user) {     
    return userId === user._id; 
  }
});

