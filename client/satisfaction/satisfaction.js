Template.satisfaction.rendered = function() {

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
            data: _.values(this.data)
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

  this.data.radar = myRadarChart;
  console.log(this.data.radar);




};

Template.satisfaction.events({
  'click': function(evt,template) {

    if(Template.parentData(1).status === "open") {
      console.log(template.data.radar);

      /* var activePoints = myRadarChart.getValue(evt); */
      /* var w = myRadarChart.getData(); */
      var activePoints = template.data.radar.getValue(evt);
      var w = template.data.radar.getData();
    }



  }
});
