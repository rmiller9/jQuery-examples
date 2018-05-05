// JavaScript Document
/* Load search images only on desktop version*/
	/* set flag to false:*/
var imageLoaded = false;
var loadImages = function() {

	if($(window).width() > 767 && !imageLoaded)  {
		var searchImages = [];
		var currentImage;
		var target;

		searchImages = $("#types .type-panel a");
		$(searchImages).each(function(){
			currentImage = $(this).data("image");

			if(typeof currentImage !== "undefined") {
				createImage = "<img src=\"images/search/" + currentImage +".png\" alt=\"search "+ currentImage +" inventory\">";
				target = $(this).find("div.name");
				target.after(createImage);
				/* set flag to true so it only loads once*/
				imageLoaded = true;					
			}
		});
	}
}
//resize:
$(window).on('resize',function() {
	loadImages();
});
$(document).ready(function() {
    $(window).trigger('resize');
});
