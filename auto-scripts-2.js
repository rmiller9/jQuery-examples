// JavaScript Document
/* Dependencies: jQuery 1.10.1 */

//Make certain jQuery can access '$'
jQuery(function($) {
// access internet specials JSON data
	function jsonSpecials() {   
 		var autos = [];
		//check if we have our global vehicle array available
		if(typeof vehicles !=="undefined"){
 			 autos = vehicles.autos;
	 	}

	 	if(typeof autos !== "undefined"){
		 	$("#unit-slider").append("<div>");
	 		populateFlexSlider(autos);
	 	}else{
 			//if array is empty, hide internet spcials header
 			$("#specials-label").addClass('no-show');
	 	}
	 }
	function populateFlexSlider(autos) {
		var slideDivOpen = "<li><a><img class=\"image";
		var slideDivClose =  "\" /><div class=\"more-details\"><i class=\"fa fa-plus-square\"></i> More Details</div></a></li>";

	    for(var i in autos){
 			$("#unit-slider .flexslider .slides").append(slideDivOpen+i+slideDivClose);
 			$(".flexslider .slides li .image"+i).attr('src',autos[i].unitImage);
 			$(".flexslider .slides li .image"+i).parent().attr('href',autos[i].unitLink);
 			$(".flexslider .slides li .image"+i).after("<div class=\"unitPrice\">Special Price: "+autos[i].unitPrice+"</div>");
			$(".flexslider .slides li .image"+i).before("<div class=\"unitTitle\">"+autos[i].unitYear+" " +autos[i].unitMake + " " + 
			autos[i].unitModel + " </div>");
 		}
	}
	//call flexslider 
	function runFlexslider(){
 	 	$('.flexslider').flexslider({
	   		animation: "slide",
	   		controlsContainer: "#unit-slider",
  		});
	}
	/* Renders panels on front-page tappable, clickable */
	var tappablePanels = function() {
		$(".tappablePanels").on("click", function(){
			var linktarget =	$(this).data("target");
			window.open(linktarget);
		});
	}
	if($('body#home').length) {
		tappablePanels();
		jsonSpecials();
		runFlexslider();
	}
}
