if (Meteor.isClient) {
  Radar = {};
  // counter starts at 0
  Meteor.subscribe('allUsers');
  /* Meteor.subscribe('reviews'); */
  Meteor.subscribe("questions");


}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
