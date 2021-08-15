$(document).ready(function(){
	$('#nav').onePageNav();
});

/*--jquery scrollTop plugin use here--*/
$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() > 100){
			$('#back-to-top').fadeIn();
		}else{
			$('#back-to-top').fadeOut();
		}
	});
	$('#back-to-top').click(function(){
		$('html,body').animate({
			scrollTop:0
		},4000 )
	});
});
/*--aos-animate-library use here--*/
function aos_init(){
	AOS.init({
		duration: 1000,
		easing: "ease-in-out-back"
	});
}
$(window).on('load',function(){
	aos_init();
});