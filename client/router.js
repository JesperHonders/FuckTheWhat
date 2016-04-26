Router.configure({
  layoutTemplate: 'dashboard'
});

Router.route('/', function () {
  this.render('home');
});

Router.route('/pleinen', function () {
  this.render('plein_list');
});

Router.route('/plein/:_id', function () {
  this.render('plein_detail', {
    data: function () {
      return Posts.findOne({_id: this.params._id});
    }
  });
});
