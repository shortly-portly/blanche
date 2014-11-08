Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
  name: 'home',
  waitOn: function() {
    return Meteor.subscribe('reviews');
  },
  data: function() {
    return Reviews.findOne({user: Meteor.userId()});
  },
  action: function() {
    if (this.ready) {
      this.render("home");
    }
  }
});

Router.route('/listPerformance', {
  name: 'listPerformance',
  waitOn: function() {
    return Meteor.subscribe('reviews');
  },
  data: function() {
    return { myData: Reviews.find({status: "closed"})};
  },
  action: function() {
    if (this.ready) {
      this.render('listPerformance');
    }
  }
});

Router.route('/editPerformance', {
  name: 'editPerformance',
  waitOn: function() {
    return Meteor.subscribe('reviews');
  },
  data: function() {
    return Reviews.findOne({user: Meteor.userId()});
  },
  action: function() {
    if (this.ready) {
      this.render("editPerformance");
    }
  }
});

Router.route('/viewPerformance', {
  name: 'viewPerformance',
  waitOn: function() {
    return Meteor.subscribe('reviews');
  },
  data: function() {
    return Reviews.findOne({user: Meteor.userId()});
  },
  action: function() {
    if (this.ready) {
      this.render("viewPerformance");
    }
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

Router.route('/user/:_id', {
      name: 'wibble',
      waitOn: function() {
        return Meteor.subscribe('allUsers');
      },
      data: function() {
        return Meteor.users.findOne(this.params._id);
      },
      action: function() {
        if (this.ready()) {
        this.render('editUser');
      }
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
