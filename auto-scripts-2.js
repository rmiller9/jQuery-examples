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
	 	var iterations = autos.length;
	 	populateFlexSlider(iterations,autos);
 	}else{
 		//if array is empty, hide internet spcials header
 		$("#specials-label").addClass('no-show');
 	}
 }
function populateFlexSlider(iterations,autos) {
	var slideDivOpen = "<li><a><img class=\"image";
	var slideDivClose =  "\" /><div class=\"more-details\"><i class=\"fa fa-plus-square\"></i> More Details</div></a></li>";

    for(i=0; i < iterations; i++){
 		$("#unit-slider .flexslider .slides").append(slideDivOpen+i+slideDivClose);
 		$(".flexslider .slides li .image"+i).attr('src',autos[i].unitImage);
 		$(".flexslider .slides li .image"+i).parent().attr('href',autos[i].unitLink);
 		$(".flexslider .slides li .image"+i).after("<div class=\"unitPrice\">Special Price: "+autos[i].unitPrice+"</div>");
		$(".flexslider .slides li .image"+i).before("<div class=\"unitTitle\">"+autos[i].unitYear+" " +autos[i].unitMake + " " + 
			autos[i].unitModel + " </div>");
 	}
}

function runFlexslider(){
//	mobiFunctions();
 	 $('.flexslider').flexslider({
	   	animation: "slide",
	   	controlsContainer: "#unit-slider",
  	});
}

		if($('body#home').length) {
			exeSlider();
			tappablePanels();
			jsonSpecials();
			runFlexslider();
		}
}