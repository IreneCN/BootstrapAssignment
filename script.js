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

