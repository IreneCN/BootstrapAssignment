/**
 * @author Chidinma Irene Nwoye
 */

var video ="<iframe width='560' height='315' src='http://www.youtube.com/embed/gzoZPZFpyuM' frameborder='0' allowfullscreen></iframe>";

$(document).ready(function(){
	setNav();   //I'm creating a function for my navigation 
});

function setNav(){
	
	$(".tajmahal").on("click", function(){ //When the button tajmahal is clicked the YouTube video will load
		$('#myModal').modal(); //This is a method that initializes the default settings of the modal
		$('.modal-body').html(video); //This refers to the div class modal in my html file and it'll load the video uwhen clicked
	});
	
	$(".close").on("click", function(){ //This also enable interactivity in the modal for the close button when it's clicked
		$(".modal-body").empty();
		});
}

var video1 ="<iframe width='420' height='315' src='http://www.youtube.com/embed/dAnVA4_xhTk' frameborder='0' allowfullscreen></iframe>";


$(document).ready(function(){
	setNav1();
});

function setNav1(){
	
	$(".colosseum").on("click", function(){
		$('#myModal').modal();
		$('.modal-body').html(video1);
	});
	
	$(".close").on("click", function(){
		$(".modal-body").empty();
		});
}

var video2 ="<iframe width='420' height='315' src='http://www.youtube.com/embed/QZ7T2shexEM' frameborder='0' allowfullscreen></iframe>";



$(document).ready(function(){
	setNav2();
});

function setNav2(){
	
	$(".pyramid").on("click", function(){
		$('#myModal').modal();
		$('.modal-body').html(video2);
	});
	
	$(".close").on("click", function(){
		$(".modal-body").empty();
		});
}
