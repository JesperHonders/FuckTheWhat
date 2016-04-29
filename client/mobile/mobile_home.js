Template.mobile_home.helpers ({
  meldingen: function(){
    return Meldingen.find({status: "unassigned"});
  }
})

Template.mobile_home.events ({
  'click .move': function(event) {
  	event.preventDefault();
  	console.log(event.currentTarget)

    event.currentTarget.classList.add('moveToActiveClass')
    Meteor.setTimeout(() => {
    	Meteor.call('moveToActive', this._id, this.name, this.time)
      Router.go()
    }, 200)



  }
})

Template.mobile_home.onCreated(function bodyOnCreated() {
  Meteor.subscribe('Meldingen');
});
