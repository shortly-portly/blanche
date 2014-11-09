Template.viewPerformance.helpers({
  userDetails: function() {
    console.log("view Performance user Details called");
    console.log("this is..");
    console.log(this);
    var x = Meteor.users.findOne({_id: this.user});
    console.log("found ..x");
    console.log(x);
    return x;
  }
});
