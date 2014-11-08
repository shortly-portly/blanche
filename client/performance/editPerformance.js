var collectData = function(template) {
  var balance = $('.balance').val();
  var satisfaction = myRadarChart.getData();
  var satisfactionData = {};

  _.each(satisfaction.datasets[0].points, function(point) {
    satisfactionData[point.label] =  point.value;
  });

  var stress = template.find("input[name=stress]:checked").value;

  var data = {
    balance: balance,
    satisfaction: satisfactionData,
    stress: stress
  };

  return data;

};



Template.editPerformance.events ({
  'click .saveReview': function(evt, template) {

    var data = collectData(template);

    data.status = "open";

    Reviews.update(this._id, {$set: data});
    FlashMessages.sendInfo("Review Saved");

  },

  'click .submitReview': function(evt, template) {

    var data = collectData(template);

    data.status = "closed";

    Reviews.update(this._id, {$set: data});
    FlashMessages.sendInfo("Review Submitted");
    Router.go('home');

  }

});
