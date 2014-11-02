Template.users.helpers({
  wibble: function() {
    return Meteor.users.find();
  }
});
