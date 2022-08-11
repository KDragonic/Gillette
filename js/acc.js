let state = 0;
$(".accordion").on('click', function(e) {
	$(".panel").toggle();
	if (state == 0)
	{
		state = 1;
		$(".accordion img").css('transform', 'scale(1,-1)');
	}
	else if (state == 1)
	{
		state = 0;
		$(".accordion img").css('transform', 'scale(1,1)');
	}
});