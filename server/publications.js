Meteor.publish('allUsers', function() {

    if (this.userId) {
      user = Meteor.users.findOne(this.userId);

      if (user.profile.role === "admin") {
        return Meteor.users.find();
      }
    }

});
