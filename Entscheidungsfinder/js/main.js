$(document).ready(function() {
	// when document loaded:

	let zufall ;
	$("#antwort").hide();

	$("#input").keypress(function(evt){
		let key = evt.which;
		let entscheidung = zufallszahlGenerieren();
		if(key == 13){
			if(entscheidung == 1){
				$("#antwort").hide();
				$("#antwort").fadeIn(1000);
				$("#antwort").css("background-color","rgb(0, 241, 60)");
				$("#antwort").html("Ja");
			}
			if(entscheidung == 2){
				$("#antwort").hide();
				$("#antwort").fadeIn(1000);
				$("#antwort").css("background-color","rgb(214, 41, 41)");
				$("#antwort").html("Nein");
			}
		}
	

	})
	
	$("#button").mouseup(function() {
		
		let entscheidung = zufallszahlGenerieren();
		if(entscheidung == 1){
			$("#antwort").hide();
			$("#antwort").fadeIn(1000);
			$("#antwort").css("background-color","rgb(0, 241, 60)");
			$("#antwort").html("Ja");
		}
		if(entscheidung == 2){
			$("#antwort").hide();
			$("#antwort").fadeIn(1000);
			$("#antwort").css("background-color","rgb(214, 41, 41)");
			$("#antwort").html("Nein");
		}
		
	})
	$("#button").mouseenter(function() {
		$("#button").css("transform","scale(0.90)");
		$("#button").css("background-color","rgb(170, 170, 170)");
	})
	$("#button").mouseleave(function() {
		$("#button").css("transform","scale(1.00)");
		
		$("#button").css("background-color","rgb(183, 183, 183)");
	})
});
function  zufallszahlGenerieren(){
	return Math.floor(Math.random()*2)+1;
}