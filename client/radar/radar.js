Template.radar.rendered = function() {


  var name = this.data.name;
  var answer = Reviews.findOne({user: Meteor.userId()});
  /* var values = answer.data[name]; */

  var data = {

    /* var answer = Reviews.findOne({user: Meteor.userId()});
    var words = answer.data[name]; */
    labels: this.data.options,
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(215, 31, 44, 0.9);",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: _.values(answer.data[name])
        }
    ]
  };

  var options = {scaleShowLabels : true,
  pointLabelFontSize: 12};

  Chart.defaults.global.scaleOverride = true;
  Chart.defaults.global.scaleSteps = 10;
  Chart.defaults.global.scaleStepWidth = 1;


  ctx = document.getElementById(this.data.name).getContext("2d");
  myRadarChart = new Chart(ctx).Radar(data, options);

  console.log("value of radar is");
  Radar[this.data.name] = myRadarChart;
  this.data.radar = myRadarChart;
  console.log(this.data);





};

Template.radar.helpers({
  wibble: function() {
    console.log("wibble called");
  }
});

Template.radar.events({
  'click': function(evt,template) {


      /* var activePoints = myRadarChart.getValue(evt); */
      /* var w = myRadarChart.getData(); */
      var activePoints = template.data.radar.getValue(evt);
      var w = template.data.radar.getData();




  }
});
