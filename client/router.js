Router.configure({
  layoutTemplate: 'dashboard'
});

Router.route('/', function () {
  this.render('home');
});

Router.route('/pleinen', function () {
  this.render('plein_list');
});

Router.route('/settings', function () {
  this.render('settings');
});

Router.route('/mobile', function () {
  this.layout('mobile_home');
  this.render('mobile_home');
});

Router.route('/plein/:_id', function () {
  this.render('plein_detail', {
    data: function () {
      return id = this.params._id
    }
  });
});
