Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function() {
  this.render('home');
});

Router.route('/admin', function () {
  this.render('admin');
});

Router.route('/newUser', function() {
  this.render('newUser');
});


Router.onBeforeAction(function () {
  // all properties available in the route function
  // are also available here such as this.params

  if (!Meteor.userId()) {
    // if the user is not logged in, render the Login template
    this.render('logon');
  } else {
    // otherwise don't hold up the rest of hooks or our route/action function
    // from running
    this.next();
  }
});
