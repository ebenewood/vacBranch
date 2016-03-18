function color (num) {
 if ( num == 0) {
			return 'red';
	} else if
		( num == 1) {
		 	return 'blue';
	} else if
		( num == 2) {
			return 'green';
	} else if
		( num == 3) {
			return 'purple';
	} else if
		( num == 4) {
			return 'black';
	} else if
		( num == 5) {
			return 'gray';
	} else if
		( num == 6) {
			return 'orange';
	} else if
		( num == 7) {
			return 'brown';
	} else if
		( num == 8) {
			return 'yellow';
	} else if
		( num == 9) {
			return 'orchid';
		};
};

function bgc() {
	userDate = new Date();
	userDate = Date.parse(userDate);
	userDate = userDate.toString();
	colorArr = [];

	for (i = 0; i <= userDate.length; i++) {
		x = color(userDate.charAt(i));
		colorArr.push(x);

	};
};

// var pix = {
// 	width: 1px;
// 	heighth: 1px;
// 	color: '';
// };

function pix(color) {
	this.width = 'width 1px';
	this.height = 'height 1px';
	this.color = color;
};

function pixMaker() {
	for (i = 0; i <= (colorArr.length - 1); i++) {
		window['pix' + i] = new pix(colorArr[i]);
	};
};

function orientX() {

	if (parseInt(userDate.charAt(9)) % 2 == 0) {
		posX = 'top';
	} else {
		posX = 'bottom';
	};
};

function orientY() {
	newSeed = new Date();
	newSeed = Date.parse();
	newSeed = newSeed.toString();
	if (parseInt(newSeed.charAt(9)) % 2 == 0) {
		posY = 'left';
	} else {
		posY = 'right';
	};
};



$(function () {
	bgc();
	orientX();
	orientY();

	var k = 1;
	var l = 1;
	var m = 1;
	var n = 1;

	alert(userDate.charAt(9));

	for (j = 0; j <= 100; j++) {
		for (i = 0; i <= (colorArr.length - 1); i++) {

			var divApp = '<div style="position: fixed;' + posX + ': ' + (k += parseInt(userDate.charAt(1))) + 'px;' + posY + ': ' + (l += parseInt(userDate.charAt(2))) + 'px; background-color: ' + colorArr[i] + '; width:' + (m += parseInt(userDate.charAt(3))) + 'px; height:' + (n += parseInt(userDate.charAt(3))) + 'px;"></div>'

					$('.loopbox').append(divApp);

	};
};

// var k = 1;
// var l = 1;
// var m = 1;
// var n = 1;
//
// for (j = 0; j <= 100; j++) {
// 	for (i = 0; i <= (colorArr.length - 1); i++) {
//
// 		var divApp = '<div style="position: fixed; bottom:' + (k += parseInt(userDate.charAt(1))) + 'px; right:' + (l += parseInt(userDate.charAt(2))) + 'px; background-color: ' + colorArr[i] + '; width:' + (m += parseInt(userDate.charAt(3))) + 'px; height:' + (n += parseInt(userDate.charAt(3))) + 'px;"></div>'
//
// 				$('.loopbox').append(divApp);
//
// };
// };
//
// var k = 1;
// var l = 1;
// var m = 1;
// var n = 1;
//
// for (j = 0; j <= 100; j++) {
// 	for (i = 0; i <= (colorArr.length - 1); i++) {
//
// 		var divApp = '<div style="position: fixed; top:' + (k += parseInt(userDate.charAt(1))) + 'px; right:' + (l += parseInt(userDate.charAt(2))) + 'px; background-color: ' + colorArr[i] + '; width:' + (m += parseInt(userDate.charAt(3))) + 'px; height:' + (n += parseInt(userDate.charAt(3))) + 'px;"></div>'
//
// 				$('.loopbox').append(divApp);
//
// };
// };
//
// var k = 1;
// var l = 1;
// var m = 1;
// var n = 1;
//
// for (j = 0; j <= 100; j++) {
// 	for (i = 0; i <= (colorArr.length - 1); i++) {
//
// 		var divApp = '<div style="position: fixed; bottom:' + (k += parseInt(userDate.charAt(1))) + 'px; left:' + (l += parseInt(userDate.charAt(2))) + 'px; background-color: ' + colorArr[i] + '; width:' + (m += parseInt(userDate.charAt(3))) + 'px; height:' + (n += parseInt(userDate.charAt(3))) + 'px;"></div>'
//
// 				$('.loopbox').append(divApp);
//
// };
// };

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
