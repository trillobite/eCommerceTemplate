
var project = {
	body: function() {
		var image = $jConstruct('image', {
			src: './css/images/hipsterlogogenerator_1422579646895.png',
		}).css({
			'margin-top': '-100px', // -100px will crop from the top so change this value until it's around the middle of the image.
		});

		var header = $jConstruct('div').css({
			'width': '100%',
			'height': '400',
			'overflow': 'hidden',
			'-moz-box-shadow': '0 4px 8px rgba(0,0,0,0.5)',
			'-webkit-box-shadow': '0 4px 8px rgba(0,0,0,0.5)',
			'box-shadow': '0 4px 8px rgba(0,0,0,0.5)',
		}).addChild(image);

		return $jConstruct('div').css({
			'text-align': 'center',
			//'border': '1px solid grey',
			'width': '1024',
			'height': '1000',
			'margin': '0 auto',
			'-moz-box-shadow': '0 4px 8px rgba(0,0,0,0.5)',
			'-webkit-box-shadow': '0 4px 8px rgba(0,0,0,0.5)',
			'box-shadow': '0 4px 8px rgba(0,0,0,0.5)',
		}).addChild(header);
	}
}


$(document).ready(function() {
	project.body().appendTo('body');
});