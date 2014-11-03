Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function() {
  this.render('home');
}, {
  name: 'home',
  data: function() {
    console.log("in theory the user id is....");
    console.log(Meteor.userId());
    var wibble = Reviews.findOne({user: Meteor.userId()});
    console.log(wibble);
    return wibble;
  }
});

Router.route('/admin', function () {
  this.render('admin');
});

Router.route('/users', function() {
  this.render('users');
});

Router.route('/newUser', function() {
  this.render('newUser');
});

Router.route('/user/:_id', function() {

  this.render('editUser');
}, {
      name: 'wibble',
      data: function() {
        return Meteor.users.findOne(this.params._id);
      }
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
