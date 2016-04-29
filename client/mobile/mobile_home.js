Template.mobile_home.helpers ({
  meldingen: function(){
    return Meldingen.find({status: "unassigned"});
  }
})

Template.mobile_home.events ({
  'click .move': function(event) {
  	event.preventDefault();
  	var link = document.getElementById(this._id._str);
    console.log( this._id, this.name, this.time)
    link.classList.add('moveToActiveClass')
    Meteor.setTimeout(() => {
    	Meteor.call('moveToActive', this._id, this.name, this.time)
    }, 200)
    
    
  }
})

Template.mobile_home.onCreated(function bodyOnCreated() {
  Meteor.subscribe('Meldingen');
});
