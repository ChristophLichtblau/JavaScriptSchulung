$("#löschen").mouseup(function (){
	$(".smiley").hide(100);
});
$("#zeigen").mouseup(function () {
	$(".smiley").show(100);
});

$(".smiley").mousedown(function () {
	$(this).fadeOut(500).delay(3000).fadeIn(500);
});

