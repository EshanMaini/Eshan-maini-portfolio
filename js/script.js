$(document).ready(function(){
	//For Sliding Animation in Nav Bar
	$(".menu ul li").mouseenter(function(){
		var slidingThing = $(".sliding-line");
		if(slidingThing.css("display") == "none"){
			slidingThing.show();
		}
		var leftPadding = $(this).css("padding-left").replace("px","");
		var newPadding = parseFloat(leftPadding);

		var currPos = slidingThing.offset().left;
		var currWidth = $(this).css("width").replace("px","");
		var expectedPos = $(this).offset().left + newPadding;

		slidingThing.stop().animate({width: currWidth + "px",left: changepos(currPos, expectedPos)},200, "swing", function(){});
	}).mouseleave(function(){
		$(".sliding-line").hide();
	});

	function changepos(currPos, expextedPos){
    if(currPos > expextedPos){
      var diff = currPos - expextedPos;
      var sign = "-=";
    } else{
      var diff = expextedPos - currPos;
      var sign = "+=";
    }
	var finalPos = sign + diff;
    return finalPos;

	}

	$("#home-link").click(function(){
		$(".menu").css({"background":"#e74c3c"});
	});

	$("#about-link").click(function(){
		$(".menu").css({"background":"#3498db"});
	});

	$("#services-link").click(function(){
		$(".menu").css({"background":"#f39c12"});
	});

	$("#portfolio-link").click(function(){
		$(".menu").css({"background":"#9b59b6"});
	});

	$("#contact-link").click(function(){
		$(".menu").css({"background":"#2ecc71"});
	});

});
