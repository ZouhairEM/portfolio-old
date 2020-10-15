$(document).ready(function() {

	$workPostContentActive = $('.workPostContent.active');
    $('.workPostContent').hide();
   
    $workPostContentActive.show();
    toggleWindow($workPostContentActive);
   
    function toggleWindow(target) {
    	 var wPActive = target.parent().find('.workTitle').find('.toggleWindow').children();

    	if(wPActive.hasClass('fa-angle-down')){
			wPActive.addClass('fa-angle-up');
			wPActive.removeClass('fa-angle-down');
    	} else {
			wPActive.addClass('fa-angle-down');
			wPActive.removeClass('fa-angle-up');
    	}

    }

$('.test').click(function() {

	if ($(this).hasClass('active')) {
		
		$(this).removeClass('active');

		$('.workPostContent').slideUp(function() {
			$(this).removeClass('active');

			toggleWindow($('.workPostContent'));
		});
	} else {
		$(this).addClass('active');

		$('.workPostContent').slideDown(function() {
			$(this).addClass('active');

			toggleWindow($('.workPostContent'));
		});
		
	}

});
    $('.open').on('click', function() {
        $(this).toggleClass('active');
        $('.nav').toggleClass('active');
        $('.topNavRight').toggleClass('active');
    });

    $('.open').click(function() {
        if ($(this).find("i").hasClass("fa-bars")) {
            $(this).find("i").addClass("fa-close");
            $(this).find("i").removeClass("fa-bars");
        } else {
            $(this).find("i").addClass("fa-bars");
            $(this).find("i").removeClass("fa-close");
        }
    });

    $('.workTitle').on('click', function(){

    	$(this).parent().find('.workPostContent').slideToggle();

    	if($(this).find('.toggleWindow').children().hasClass('fa-angle-down')){
			$(this).find('.toggleWindow').children().addClass('fa-angle-up');
			$(this).find('.toggleWindow').children().removeClass('fa-angle-down');
    	} else {
			$(this).find('.toggleWindow').children().addClass('fa-angle-down');
			$(this).find('.toggleWindow').children().removeClass('fa-angle-up');
    	}

    });
});
