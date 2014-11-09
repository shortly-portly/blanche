Template.time.rendered = function() {

  $('.time').noUiSlider({
    start: [ this.data ],
    range: {
      'min': [  0 ],
      'max': [ 100 ]
    }
  });

};
