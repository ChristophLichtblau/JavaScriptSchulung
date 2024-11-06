$(document).ready(function() {
	// when document loaded:

	let zufall;
	let versuche;

	
	spielstart();

	$("#eingabe").on("keypress",function(evt) {
		let key = evt.which;

		if(key == 13){
			auswerten();
		}
	});
	$("#neuesSpiel").mouseup(function() {
		spielstart();
	})

});

function spielstart(){
	versuche = 0;
	$("#neuesSpiel").hide();
	$("#ausgabe").html("");
	$("#versuche").html("Versuche: 0");
	$("#eingabe").html("");
	$("#eingabe").html("");
	zufall = Math.floor(Math.random()*100)+1;
}

function auswerten(){
	versuche++;
	$("#versuche").html("Versuche: " + versuche);
	let eingabe = $("#eingabe").val();
	if(eingabe < zufall){
		$("#ausgabe").html(eingabe + " ist zu klein!")
		
		
	}
	if(eingabe > zufall){
		$("#ausgabe").html(eingabe + " ist zu groß!")
		
	}
	if(eingabe == zufall){
		$("#ausgabe").html("Super, " + eingabe + " ist die richtige Zahl!")
		$("#neuesSpiel").show();
	}
	$("#eingabe").val("");
	
}