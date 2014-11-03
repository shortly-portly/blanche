if (Meteor.isClient) {
  // counter starts at 0
  Meteor.subscribe('allUsers');
  Meteor.subscribe('reviews');


}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
