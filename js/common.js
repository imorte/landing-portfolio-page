$(document).ready(function() {

	function heightDetect(){
		$(".main_head").css('height', $(window).height());
	}

	heightDetect();

	$(window).resize(function(){
		heightDetect();
	});

	$(window).load(function(){
		$('.loaderInner').fadeOut();
		$('.loader').delay(400).fadeOut('slow');
	})

	$('.sandwich').on('click', function(){
		$('.sandwich').toggleClass('active');
	})

	$('.toggle_mnu').on('click', function(){
		if($(".top_mnu").is(":visible")){
			$('.top_mnu').fadeOut(600);
		}else{
			$('.top_mnu').fadeIn(600);
		}
	})
	
}); 