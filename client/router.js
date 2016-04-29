Router.configure({
 	layoutTemplate: 'dashboard',
 	loadingTemplate: 'loading',
 	waitOn: function () {
 		return [Meteor.subscribe('ftwimages'),Meteor.subscribe('PleinData')];
 	}
});

Router.route('/',  {
	name: "home",
  	waitOn: function () {
 		return [Meteor.subscribe('Meldingen'),Meteor.subscribe('PleinData')];
 	},
 	action:function () {
 		this.render('home');
 	}
});

Router.route('/pleinen',{
	name: "pleinen",
	waitOn: function(){
		return Meteor.subscribe('Pleinen');
	},
	action:function () {
  		this.render('plein_list');
	}
});

Router.route('/plein/:_id', {
	name:"pleindetail",
	waitOn: function() {
		return [ Meteor.subscribe('Pleinen'),Meteor.subscribe('Events'), Meteor.subscribe('Meldingen')]
	},
	action:function () {
  		this.render('plein_detail', {
   			data: function () {
      			return id = this.params._id
    		}
  		});
  	}
});

Router.route('/settings', {
	name: "settings",
	waitOn: function () {
 		return Meteor.subscribe('ftwimages');
 	},
 	action:function () {
 		this.render('settings');
 	}
});

Router.route('/mobile', function () {
  this.layout();
  this.render('mobile_home');
});

Router.route('/mobile/active', function () {
  this.layout();
  this.render('mobile_active');
});

Router.route('/mobile/detail/:_id', function () {
  this.layout()
  this.render('mobile_detail', {
    data: function () {
      return id = this.params._id
    }
  });
});
