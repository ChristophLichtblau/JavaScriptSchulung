$(document).ready(function() {
	// when document loaded:

	$("#display").on("mousedown",function() {
		$(this).html("");
	});

	$(".taste").mouseup(function() {
		let zeichen = $(this).html();
		
		$("#display").html($("#display").html() + zeichen);
	});

	$("#gleich").on("mousedown",function() {
		
		let ergebnis = $("#display").html();
		$("#display").html(eval(ergebnis));

	});

});