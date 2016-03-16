$(function () {
	$('form#one').submit(function (event) {
		event.preventDefault();
		if ($('input#one').val() == 'yes') {
			$('input#two').show();
		};
	});
});