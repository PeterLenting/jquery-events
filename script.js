$(document).ready(function() {
    $(".stream-nav").on("click", function() {

        var allStreamsCardsSelector = ".card";

        var thisStreamCardsSelector = "." + this.id + "-card";


        $(allStreamsCardsSelector).removeClass("card-highlight");

        $(thisStreamCardsSelector).addClass("card-highlight");
    });
    
    $("p").click(function() {
    $(this).children("a").css("background-color", "orange");
    });
    
    	$("button").click(function(){
		$(this).prev().slideToggle('slow');
});

   $("img").click(function() {
    $(this).next().children("p").slideDown();
    });
    
    	$(".card").click(function() {
		$(this).toggleClass("highlight");	 
	});
	
	$("#streamSelect").click(function(){
	    $(".card:not(.highlight)").hide();
});  

$("#streamAll").click(function(){
		$(".card").show();	 
	});
  });