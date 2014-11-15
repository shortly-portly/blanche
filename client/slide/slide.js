Template.slide.rendered = function() {
  console.log("slider");
  console.log(this.data.name);
  var name = this.data.name;
  var answer = Reviews.findOne({user: Meteor.userId()});
  console.log(answer);
  console.log(answer.data);

  $('.time').noUiSlider({
    start: [ answer.data[name] ],
    range: {
      'min': [  0 ],
      'max': [ 100 ]
    }
  });

};
