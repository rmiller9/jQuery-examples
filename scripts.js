// JavaScript Document
/* Load large images only on desktop version */
	/* set flag to false:*/

var imageWidth, verticalOffset, element, offset, offsetTop, menuSelect;
var menuItems = [];
/* for larger pages, loadImages checks the size of the containing div and if it is large enough to accommodate a larger image it swaps the default 250px wide image with a wider one if such a file exists. 425px files are appended with _md and 850px files with _lg. 
*/
var loadImages = function(elm){
	var itemImages = [];
	var currentImage, target, createImage;	
	
	itemImages = $(elm);
	$(itemImages).each(function(){
//		currentImage = $(this).data("image");
		currentImage = $(this).find(" img").attr("src");
			if(typeof currentImage !== "undefined") {
				if(imageWidth > 424 && imageWidth < 900 ){
					createImage =  currentImage.replace('.jpg','-md.jpg') ;	
					if(fileExists(createImage)){
						target = $(this).find(" img").attr("src",createImage);	
					}

				} else if(imageWidth >900){
					createImage =  currentImage.replace('.jpg','_lg.jpg') ;
					if(fileExists(createImage)){
						target = $(this).find(" img").attr("src",createImage);
					}
				}
			}
		});	
	};
//make sure alternate image exists before you swap it out for the existing image
var fileExists = function(url){
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!==404;
};
var scrollToTop =function() {
    verticalOffset = typeof(verticalOffset) !== 'undefined' ? verticalOffset : 0;
    element = $('body');
    offset = element.offset();
    offsetTop = offset.top;
    $('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
};
//menu functions
var showItem = function(name){
  	menuItems = $("#mobile-nav-menus ul." + name).toggleClass("hidden shown");
  	if($(menuItems).siblings().hasClass("shown")){
    	$(menuItems).siblings().addClass("hidden").removeClass("shown");
	}
};	
var mobileMenu = function(trigger,target){
	$(trigger).click(function(){
		$(this).toggleClass('selected');
		$(this).siblings().removeClass('selected');
		menuSelect = $(this).text().toLowerCase();
		showItem(menuSelect);
		event.stopPropagation();
	});
	//close if clicked outside
	$(document).click( function(){
    	$(target).removeClass('shown').addClass('hidden');
    	$(trigger).removeClass('selected');
	});
};
var mobileStickyHeader = function(stickyBit){
	if(window.innerWidth < 767) {
		var stickyOffset = $(stickyBit).offset().top;
		$(window).scroll(function(){
		  var sticky = $(stickyBit),
		      scroll = $(window).scrollTop();
		  if (scroll >= stickyOffset){ 
			  sticky.addClass('fixed');
		  }	else {
			  sticky.removeClass('fixed');

		  }
		});
	}
};




$( document ).ready(function() {
// run these on all pages:
	scrollToTop();
	mobileMenu("#mobile-nav-btns ul.top-level li", "#mobile-nav-menus ul");
	mobileStickyHeader("#mobile-nav-wrap");
	
// run these on appropriate pages:	
	if($("body.list-template").length > 0){
		imageWidth = $("#content .item .image").width();
		loadImages("#content .item .image");

	}else if($("body.detail-template")) {
		imageWidth = $("#content .image").width();
		loadImages("#content .image");
	}
});

//scroll to top function
 $(function(){
    $(document).on( 'scroll', function(){
         if ($(window).scrollTop() > 100) {
            $('.scroll-top-wrapper').addClass('show');
        } else {
            $('.scroll-top-wrapper').removeClass('show');
        }
    });
    $('.scroll-top-wrapper').on('click', scrollToTop);
});