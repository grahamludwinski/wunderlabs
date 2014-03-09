/* eliminate touch delay on iphone */
document.addEventListener("touchstart", function(){
}, true);
document.addEventListener("touchend", function(){}, true);

function scrollToLoc(location) {
	$('html, body').animate({ scrollTop: location.offset().top-50 }, 700);
}

$(document).ready(function() {
	
	$('.contactLink').on('click', function() {
		scrollToLoc($('#contact'));
		return false;
	});
	
	$('.scrollLink').on('click', function() {
		var location = $(this).data('scrollLocation');
		scrollToLoc($('#'+location));
		return false;
	});
	
	$('#scrollToTop').on('click', function() {
		var location = $('body');
		scrollToLoc(location);
		return false;
	});
	
	$(window).scroll(function() {
		if($(this).scrollTop() > 300) {
			 $('#scrollToTop').fadeIn("fast");
	    }
	    else {
		     $('#scrollToTop').fadeOut("fast");
	    }
	});
	
	$('#contactForm').submit(function() {
		var contactForm = $('#contactForm');
		
		$.ajax({
			type: "POST",
			url: 'contact.php',
			data: contactForm.serialize(), // serializes the form's elements.
			success: function(data) {
				$('#contactSubmit').val('Success!');
				$('#contactSubmit').css("background",'#00CF4F');
			},
			failure: function(data) {
				$('#contactSubmit').val('Failure, please try again');
			}
		});

		return false;
	});
});
