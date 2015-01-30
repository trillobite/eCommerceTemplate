
var elements = {
	menuBox: function () {
	
		var menuBoxCSS = {
			'width': '100%',
			'height': '30px',
			'text-align': 'center',
		};
		var menuButtonHover = {
			on: {
				'background-color': '#ABABAB',
			},
			off: {
				'background-color': '#DBDBDB',
			},
		}
		var menuButtonCSS = {
			'background-color': '#DBDBDB',
			'border-radius': '5px',
			'font-family': 'arial',
			'text-align': 'center',
			'line-height': '30px',
			'float': 'left',
			'width': '130px',
			'height': '30px',
			'-webkit-box-shadow': '0 8px 6px -6px black',
	   		'-moz-box-shadow': '0 8px 6px -6px black',
	        'box-shadow': '0 8px 6px -6px black',
		};

		var menu = $jConstruct('div').css(menuBoxCSS);
		var menuItem0 = $jConstruct('div', {
			text: 'Home',
			id: 'menuItem0',
		}).css(menuButtonCSS).event('mouseover', function() {
			$('#menuItem0').css(menuButtonHover.on);
		}).event('mouseout', function() {
			$('#menuItem0').css(menuButtonHover.off);
		});
		var menuItem1 = $jConstruct('div', {
			text: 'Shop',
			id: 'menuItem1',
		}).css(menuButtonCSS).event('mouseover', function() {
			$('#menuItem1').css(menuButtonHover.on);
 		}).event('mouseout', function() {
			$('#menuItem1').css(menuButtonHover.off);
		});
		var menuItem2 = $jConstruct('div', {
			text: 'About Us',
			id: 'menuItem2',
		}).css(menuButtonCSS).event('mouseover', function() {
			$('#menuItem2').css(menuButtonHover.on);
		}).event('mouseout', function() {
			$('#menuItem2').css(menuButtonHover.off);
		});
		var menuItem3 = $jConstruct('div', {
			text: 'Cart',
			id: 'menuItem3',
		}).css(menuButtonCSS).event('mouseover', function() {
			$('#menuItem3').css(menuButtonHover.on);
		}).event('mouseout', function() {
			$('#menuItem3').css(menuButtonHover.off);
		});

		menu.addChild(menuItem0).addChild(menuItem1).addChild(menuItem2).addChild(menuItem3);
		return menu;
	}
}

var project = {
	body: function() {
		var image = $jConstruct('image', {
			src: './css/images/hipsterlogogenerator_1422579646895.png',
		}).css({
			'margin-top': '-100px', // -100px will crop from the top so change this value until it's around the middle of the image.
		});

		var header = $jConstruct('div').css({
			'background-image': 'url("./css/images/large3.gif")',
			'background-size': '100%',
			'border-radius': '5px',
			'width': '100%',
			'height': '340',
			'overflow': 'hidden',
			'-webkit-box-shadow': '0 8px 6px -6px black',
	   		'-moz-box-shadow': '0 8px 6px -6px black',
	        'box-shadow': '0 8px 6px -6px black',
		}).addChild(image);

		return $jConstruct('div').css({
			'text-align': 'center',
			'border-radius': '5px',
			//'border': '1px solid grey',
			'width': '1024',
			'height': '1000',
			'margin': '0 auto',
			'-moz-box-shadow': '0 4px 8px rgba(0,0,0,0.5)',
			'-webkit-box-shadow': '0 4px 8px rgba(0,0,0,0.5)',
			'box-shadow': '0 4px 8px rgba(0,0,0,0.5)',
		}).addChild(elements.menuBox()).addChild(header);
	}
}


$(document).ready(function() {
	project.body().appendTo('body');
});