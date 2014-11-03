Meteor.methods({
  createServerUser: function(user) {
    var result = Accounts.createUser(user);
    console.log("RESULT");
    console.log(result);
    return result;
  }
});
