$(function(){
	//MOVIE COLORBOX
	$('.mv').colorbox({
		width: '100%',
	});
});

$(window).on('load', function(){
	setTimeout(function(){
		$('.ld02').addClass('on');
		setTimeout(function(){
			$('.loading').fadeOut(1000, function(){
				$('.wrapp').css({
					'position': 'relative'
				});
			});
		}, 2000)
	}, 300);
})