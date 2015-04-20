(function ($, root, undefined) {
	
	$(function () {
		'use strict';

		var screenWidth = $(window).width();
		console.log(screenWidth);
		
		function scrolling1(elem, time){
					var elem = document.querySelector(elem);
					var startPos = $(elem).position().left;
					console.log(startPos);
					var width = $(elem).width();
					function loop1() {
						startPos += time; 		
						elem.style.left = startPos + 'px';
						if (startPos >= 0) {
							startPos = -screenWidth;
						}
						window.requestAnimationFrame(loop1);
					}
					loop1();
				};
				function scrolling2(elem, time){
					var elem = document.querySelector(elem);
					var startPos = $(elem).position().left;
					console.log(startPos);
					var width = $(elem).width();
					function loop1() {
						startPos += time; 			
						elem.style.left = startPos + 'px';
						if (startPos >= screenWidth) {
							startPos = -width;
						}
						window.requestAnimationFrame(loop1);
					}
					loop1();
				};
				/*function rndRotate(elem, time) {
					var elem = document.querySelector(elem);
					start = 0,
    				multiplier = 0;
					function loop1() {
			        multiplier = 50 * Math.sin( start * 2 );
			        start += 0.05;
				    elem.style.transform  = 'rotate('multiplier * Math.sin( start ) + 80'deg)'; 
					window.requestAnimationFrame(loop1);
					}
					loop1();
				}*/

				   /* function animate() {

				    var    xnow = parseInt(item.style.left);
				        item.style.left = (xnow+1)+'px';
				    var    ynow = parseInt(item.style.top);
				        item.style.top = (ynow+Math.sin(2*Math.PI*(xnow/50))*10) + "px";
				        setTimeout(animate,20);
    				}
    				var item = document.querySelector('.balloon-4'); 
					item.style.left = '0px'; 
					item.style.top = '400px';
					
					animate(); */

				scrolling1('.clouds', .3);				
				scrolling2('.balloon-1', .2);
				scrolling2('.balloon-2', .1);
				//rndRotate('.balloon-4', 2);
	});
})(jQuery, this);
