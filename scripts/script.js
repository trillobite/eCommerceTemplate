
/*
*/


var elements = {
	menuBox: function () {
	
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
			'font-family': 'Open Sans',
			'text-align': 'center',
			'line-height': '30px',
			'position': 'relative',
			//'top': '-50',
			//'z-index': '20',
			'float': 'left',
			'width': '130px',
			'height': '30px',
			'cursor': 'pointer',
			'-webkit-box-shadow': '0 8px 6px -6px black',
	   		'-moz-box-shadow': '0 8px 6px -6px black',
	        'box-shadow': '0 8px 6px -6px black',
		};

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

		return [menuItem0, menuItem1, menuItem2, menuItem3];
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
			'margin-top': '5px',
			'background-image': 'url("./css/images/large3.gif")',
			'background-size': '100%',
			'border-radius': '5px',
			'width': '100%',
			'height': '340',
			'z-index': '-1',
			'float': 'left',
			'overflow': 'hidden',
			'-webkit-box-shadow': '0 8px 6px -6px black',
	   		'-moz-box-shadow': '0 8px 6px -6px black',
	        'box-shadow': '0 8px 6px -6px black',
		}).addChild(image);

		var main = $jConstruct('div').css({
			'text-align': 'center',
			//'border-radius': '5px',
			'background-color': 'white',
			//'border': '1px solid grey',
			'width': '1024',
			'height': '1000',
			'margin': '0 auto',
			//'z-index': '-1',
			//'float': 'left',
			/*'-moz-box-shadow': '0 4px 8px rgba(0,0,0,0.5)',
			'-webkit-box-shadow': '0 4px 8px rgba(0,0,0,0.5)',
			'box-shadow': '0 4px 8px rgba(0,0,0,0.5)',*/
		});

		for(var i = 0; i < elements.menuBox().length; ++i) {
			main.addChild(elements.menuBox()[i]);
		}

		main.addChild(header);

		main.addChild($jConstruct('div', {
			id: 'mainBody',
		}).css({
			'font-family': 'Open Sans',
			'margin-top': '10px',
			'margin-bottom': '20px',
			'padding': '60px',
			'width': '904', //had to reduce width by 120px due to padding being 60px on each side.
			//'height': '500',
			'border-radius': '5px',
			'position': 'relative',
			'float': 'left',
			'-moz-box-shadow': '0 4px 8px rgba(0,0,0,0.5)',
			'-webkit-box-shadow': '0 4px 8px rgba(0,0,0,0.5)',
			'box-shadow': '0 4px 8px rgba(0,0,0,0.5)',
		}))

		return main;
	}
}

var templateFunctions = {
    //Opens the text files, sends the data on resolve.
	getData: function(fileName) {
		console.log('getData called', fileName);
		var dfd = new $.Deferred();
	    $.get(fileName, function(data) {
	    	console.log('got data', data);
	    	dfd.resolve(data);
	    });
	    return dfd.promise;
    },
	changeText: function(filePath, elementID) {
		console.log(filePath);
		templateFunctions.getData(filePath)().done(function(data) {
			console.log(data);
			arrdb.get(elementID).text = data;
			arrdb.get(elementID).refresh();
			function scrollToTop() {
				$('html, body').animate({ scrollTop: 0 }, 'fast');
			}
			setTimeout(scrollToTop, 300);
		});
	},
};

var convertFonts = function(f) {
	fonts = f ? f : fonts;
	var tmp = [];
	for(var i = 0; i < fonts.length; ++i) {
		tmp[tmp.length] = fonts[i].replace(' ', '+') + '::latin';
	}
	return tmp;
};

WebFontConfig = { //creates a global variable.
	google: { 
		families: convertFonts(['Open+Sans', 'Lora', 'Raleway', 'Inconsolata', 'Special+Elite', 'Alegreya+Sans', 'Great+Vibes', 'Tangerine']),
	},
	active: function() {
		project.body().appendTo('body').state.done(function() {
			templateFunctions.changeText('./text/welcome.html', 'mainBody');
		}); //ensures that all the fonts are loaded, before the page is rendered.
	}
};

//Google fonts API, so I can select from many fonts.
(function() {
	var wf = document.createElement('script');
	wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
	wf.type = 'text/javascript';
	wf.async = 'true';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(wf, s);
})();