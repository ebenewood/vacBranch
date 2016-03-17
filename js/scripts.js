

function bgc() {
	one = new Date();
	one = Date.parse(one);
	one = one.toString();

	for (i = 0; i <= one.length; i++) {
		x = color(charAt(i));
		colorArr.push(x);

	};
};


$(function () {
	// $('body').css('background-color'
	$('body').fadeIn(500);

	var evalArr = [];

	$('form#questions').submit(function (event) {
		event.preventDefault();

		if ($('input#one').val().toLowerCase() == 'yes' && evalArr.length <= 0) {
			evalArr.push(1);
			// $('input#one').val('antsy?');
			$('h1').text('antsy?');


		} else if
			($('input#one').val().toLowerCase() == 'yes' && evalArr[0] == 1 && evalArr.length <= 1) {
				evalArr.push(1);
				// $('input#one').val('wanderlust?');
				$('h1').text('wanderlust?');

		} else if
			($('input#one').val().toLowerCase() == 'yes' && evalArr[1] == 1 && evalArr.length <= 2) {
				evalArr.push(1);
				// $('input#one').val('endless?');
				$('h1').text('endless?');


		} else if
			($('input#one').val().toLowerCase() == 'yes' && evalArr[2] == 1 && evalArr.length <= 3 ) {
				evalArr.push(1);
				// $('input#one').val('head on into the final frontier');
				$('h1').text('onward starchild!');
			  $('img').fadeIn().attr({
					src:'img/space.jpg'
				});

		} else if
			($('input#one').val().toLowerCase() == 'no' && evalArr.length <= 0) {
				evalArr.push(0);
				$('input#one').slideUp().fadeOut();
				$('input#one').val('Wish you weren\'t you?');

		} else {
			$('h1').text('yes | no');
			$('input#one').text('');

		};
	});
});
