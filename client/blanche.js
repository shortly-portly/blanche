if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);


  Template.hello.helpers({
    counter: function () {
      return Session.get("counter");
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

Template.chart.events({
  'click': function(evt) {
    var activePoints = myRadarChart.getValue(evt);
    // => activePoints is an array of points on the canvas that are at the same position as the click event.
    /* console.log(evt);
    console.log(activePoints[0]);
    console.log(activePoints[0].label + ":" + activePoints[0].value); */
  }
});

Meteor.startup(function() {

var data = {
    labels: ["Work", "Money", "Health", "Friends & Family", "Fun/Recreation"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [0,0,0,0,0]
        }
    ]
};
  var options = {scaleShowLabels : true};

  Chart.defaults.global.scaleOverride = true;
  Chart.defaults.global.scaleSteps = 10;
  Chart.defaults.global.scaleStepWidth = 1;

  ctx = document.getElementById("myChart").getContext("2d");
  myRadarChart = new Chart(ctx).Radar(data, options);


});
