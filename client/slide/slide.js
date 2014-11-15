Template.slide.rendered = function() {

  var name = this.data.name;
  var answer = Reviews.findOne({user: Meteor.userId()});

  $('.time').noUiSlider({
    start: [ answer.data[name] ],
    range: {
      'min': [  0 ],
      'max': [ 100 ]
    }
  });

};
