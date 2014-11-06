Template.performance.events ({
  'click .saveReview': function(evt, template) {
    var balance = $('.balance').val();

    var satisfaction = myRadarChart.getData();

    var satisfactionData = {};
    _.each(satisfaction.datasets[0].points, function(point) {
      satisfactionData[point.label] =  point.value;
    });

    var stress = template.find("input[name=stress]:checked").value;
    console.log(stress);

    var data = {
      balance: balance,
      satisfaction: satisfactionData,
      stress: stress
    };


    console.log(this._id);
    Reviews.update(this._id, {$set: data});


  }
});
