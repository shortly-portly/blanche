Template.performanceDetail.helpers ({
  userDetails: function() {
    var x = Meteor.users.findOne({_id: this.user});
    console.log(x);
    return x;
  }
});

Template.performanceDetail.events({
  'click .reopenReview': function() {
    console.log(this._id);
    Reviews.update({_id: this._id}, {$set: {"status": "open"}});
  }
});
