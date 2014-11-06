Meteor.methods({
  createServerUser: function(user) {
    var result = Accounts.createUser(user);
    
    return result;
  }
});
