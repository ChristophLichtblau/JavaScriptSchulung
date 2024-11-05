$(".fenster").slideUp(1000);




function gutenMorgen(){
	$("#hintergrundRaum").html("Guten Morgen");
	$(".fenster").slideDown(1000);
	$("#nachtlicht").fadeOut(1000);
	$("#hintergrundRaum").fadeOut(1000);
	window.setTimeout(guteNacht,5000);
}
function guteNacht(){
	$("#hintergrundRaum").html("Gute Nacht");
	$(".fenster").slideUp(1000);
	$("#nachtlicht").fadeIn(1000);
	$("#hintergrundRaum").fadeIn(1000);
	window.setTimeout(gutenMorgen,5000);
}

window.setTimeout(gutenMorgen,5000);
