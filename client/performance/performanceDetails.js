Template.performanceDetail.helpers ({
  userDetails: function() {
    var x = Meteor.users.findOne({_id: this.user});
    console.log(x);
    return x;
  }
});
