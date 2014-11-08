Template.viewBalance.rendered = function() {

  $('.balance').noUiSlider({
    behaviour: "none",
    start: [ this.data ],
    range: {
      'min': [  0 ],
      'max': [ 100 ]
    }
  });

  var parent = Template.parentData(1);

  if (parent.status === "closed") {
    $('.balance').attr('disabled', 'disabled');
  }

};
