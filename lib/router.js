Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function() {
  this.render('logon');
});

Router.route('/admin', function () {
  this.render('admin');
});
