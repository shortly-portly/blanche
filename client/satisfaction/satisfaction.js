Template.satisfaction.rendered = function() {
  console.log(this.data);
var data = {
    labels: ["Work", "Money", "Health", "Friends & Family", "Fun/Recreation"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(215, 31, 44, 0.9);",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [0,0,0,0,0]
        }
    ]
};
  var options = {scaleShowLabels : true,
  pointLabelFontSize: 12};

  Chart.defaults.global.scaleOverride = true;
  Chart.defaults.global.scaleSteps = 10;
  Chart.defaults.global.scaleStepWidth = 1;

  ctx = document.getElementById("myChart").getContext("2d");
  myRadarChart = new Chart(ctx).Radar(data, options);


};

Template.satisfaction.events({
  'click': function(evt) {
    var activePoints = myRadarChart.getValue(evt);
    var w = myRadarChart.getData();
    console.log("returned value");
    console.log(w);

  }
});
