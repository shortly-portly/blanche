Template.balance.rendered = function() {
$('.sliders').noUiSlider({
	start: [ 50 ],
	range: {
		'min': [  0 ],
		'max': [ 100 ]
	}
});

$('.sliders').on({
	set: function() {
		console.log($('.sliders').val());
	}
});
};
