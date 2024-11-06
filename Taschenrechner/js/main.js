$(document).ready(function() {
	// when document loaded:

	
	$("#display").on("mousedown",function() {
		$(this).html("");
		$("#aufgabe").html("");
	});

	$(".taste").mouseup(function() {
		let zeichen = $(this).html();
		
		$("#display").html($("#display").html() + zeichen);
	});

	$("#gleich").on("mousedown",function() {
		
		let ergebnis = $("#display").html();
		$("#aufgabe").html($("#display").html());
		$("#display").html(eval(ergebnis));
	});
	
	$(".taste").mouseenter(function () {
		$(this).css("background-color","darkgrey");

	});
	$(".taste").mouseleave(function () {
		$(this).css("background-color","rgb(72, 72, 72)");

	});
	$("#gleich").mouseenter(function () {
		$(this).css("background-color","darkgrey");

	});
	$("#gleich").mouseleave(function () {
		$(this).css("background-color","rgb(72, 72, 72)");

	});
	$("#display").mouseenter(function () {
		$(this).css("background-color","rgb(200, 228, 170)");

	});
	$("#display").mouseleave(function () {
		$(this).css("background-color","rgb(218, 248, 190)");

	});

});