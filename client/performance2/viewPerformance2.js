
Template.viewPerformance2.created = function() {
  Session.set("reviewId", this.data.review._id);
  Session.set("mode", "view");
};

Template.viewPerformance2.rendered = function() {
  console.log("View Performance 2 rendered");
  console.log(Reviews.find().count());
};
