var collectData = function(template) {
  var roles = template.find("textarea[name=roles]").value;
  var pastYear = template.find("input[name=pastYear]:checked").value;

  /* describe */

  var description = [];
  for (i=0; i<5; i++) {
    find = "input[name=describe" + i + "]";
    description[i] = template.find(find).value;
  }

  /* dislike */
  var dislike = [];
  for (i=0; i<5; i++) {
    find = "input[name=dislike" + i + "]";
    dislike[i] = template.find(find).value;
  }

  var highlights = template.find("textarea[name=highlights]").value;
  var lowlights = template.find("textarea[name=lowlights]").value;

  var time = $('.time').val();
  var balance = $('.balance').val();


  var satisfaction = myRadarChart.getData();
  var satisfactionData = {};

  _.each(satisfaction.datasets[0].points, function(point) {
    satisfactionData[point.label] =  point.value;
  });

  var stress = template.find("input[name=stress]:checked").value;

  var data = {
    roles: roles,
    pastYear: pastYear,
    description: description,
    dislike: dislike,
    highlights: highlights,
    lowlights: lowlights,
    time: time,
    balance: balance,
    satisfaction: satisfactionData,
    stress: stress
  };

  var x = "satisfaction";


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
