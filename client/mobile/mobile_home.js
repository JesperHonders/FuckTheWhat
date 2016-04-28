Template.mobile_home.helpers ({
  meldingen: function(){
    return Meldingen.find({});
  },

  unixToTime: function(timestamp) {
    return moment(timestamp).format("HH:mm")
  }
})

Template.mobile_home.events ({
  'click .move': function(event) {
    console.log(this._id)
    Meteor.call('moveToActive', this._id, this.name, this.time)
  }
})

Template.mobile_home.onCreated(function bodyOnCreated() {
  Meteor.subscribe('Meldingen');
});
