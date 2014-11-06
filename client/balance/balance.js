Template.balance.rendered = function() {

	$('.balance').noUiSlider({
		start: [ this.data ],
		range: {
			'min': [  0 ],
			'max': [ 100 ]
		}
	});

};
