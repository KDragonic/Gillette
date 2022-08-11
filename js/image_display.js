imgs = $("#s_img > .s_1 > img");

imgs.on('click', function(e) {
	src = $(this).attr("src");
	$("#detal_img").attr("src", src);
});