Router.configure({
 	layoutTemplate: 'dashboard'
});

Router.route('/',  {
  	waitOn: function () {
 		return Meteor.subscribe('ftwimages');
 	},
 	action:function () {
 		if (this.ready()) {
 			this.render('home');
 		} else {
 			this.render('loading');
 		}
 	}
});

Router.route('/pleinen', function () {
  this.render('plein_list');
});

Router.route('/settings', {
	waitOn: function () {
 		return Meteor.subscribe('ftwimages');
 	},
 	action:function () {
 		if (this.ready()) {
 			this.render('settings');
 		} else {
 			this.render('loading');
 		}
 	}
});

Router.route('/mobile', function () {
  this.layout('mobile_home');
  this.render('mobile_home');
});

Router.route('/mobile/active', function () {
  this.layout('mobile_active');
  this.render('mobile_active');
});

Router.route('/plein/:_id', function () {
  this.render('plein_detail', {
    data: function () {
      return id = this.params._id
    }
  });
});
