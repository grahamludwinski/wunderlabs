/* eliminate touch delay on iphone */
document.addEventListener("touchstart", function(){}, true);
document.addEventListener("touchend", function(){}, true);

function scrollTo(location) {
	$('html, body').animate({ scrollTop: location.offset().top-50 }, 700);
}

$(document).ready(function() {
	
	//event handlers for responsive web design section
	$('#phone').on('click', function() {
		if(!$(this).hasClass('activeButton')) {
			$(this).addClass('activeButton');
			$('#tablet').removeClass('activeButton');
			$('#laptop').removeClass('activeButton');
			
			$('#devicePreview .preview').fadeOut(100, function() {
				$(this).removeClass('tabletPreview desktopPreview');
				$(this).addClass('iphonePreview');
				$(this).fadeIn(100);
			});
		}
	});
	
	$('#tablet').on('click', function() {
		if(!$(this).hasClass('activeButton')) {
			$(this).addClass('activeButton');
			$('#phone').removeClass('activeButton');
			$('#laptop').removeClass('activeButton');
			
			$('#devicePreview .preview').fadeOut(100, function() {
				$(this).removeClass('iphonePreview desktopPreview');
				$(this).addClass('tabletPreview');
				$(this).fadeIn(100);
			});
		}
	});
	
	$('#laptop').on('click', function() {
		if(!$(this).hasClass('activeButton')) {
			$(this).addClass('activeButton');
			$('#phone').removeClass('activeButton');
			$('#tablet').removeClass('activeButton');
			
			$('#devicePreview .preview').fadeOut(100, function() {
				$(this).removeClass('iphonePreview tabletPreview');
				$(this).addClass('desktopPreview');
				$(this).fadeIn(100);
			});
		}
	});
	
	$('.contactLink').on('click', function() {
		scrollTo($('#contact'));
		return false;
	});
	
	$('.scrollLink').on('click', function() {
		var location = $(this).data('scrollLocation');
		scrollTo($('#'+location));
		return false;
	});
	
	$('#scrollToTop').on('click', function() {
		var location = $('body');
		scrollTo(location);
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
