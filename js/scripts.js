$(function () {

	$('body').fadeIn(500);

	$('form#questions').submit(function (event) {
		event.preventDefault();

		var yesCount = 0;
		var noCount = 0;

		if ($('input#one').val().toLowerCase() == 'yes') {
			yesCount += 1;
			$('input#two').slideDown().fadeIn();

		} else if
			($('input#one').val().toLowerCase() == 'no') {
				noCount += 1;
				$('input#two').val('Wish you weren\'t you?')
				$('input#two').slideDown().fadeIn();
			} else {
			$('h1').text('yes | no');
			$('input#one').text('');

		};
	});
});
