Meteor.methods({
  createServerUser: function(user) {
    Accounts.createUser(user);
  }
});
