$(document).ready(function() {
	// when document loaded:

	let vm = "Fahrrad";

	$("#eingabe").on("keyup",function(evt) {
		let key = evt.which;

	});

	$("#btnBerechnen").on("mouseup",function() {

		if($("#eingabe").val() == ""){
			alert("Bitte Kilometeranzahl eingeben");
		}else{
			if(vm == "Fahrrad"){
				fahrradBerechnen();
			}
			if (vm == "zu Fuß"){
				zuFußBerechnen()
			}
			if(vm == "Auto"){
				autoBerechnen()
			}
		}
		
		
	});

	$(".auswahl").mouseup(function() {

		$(".auswahl").css("background-color","rgb(75, 108, 156)");

		$(this).css("background-color","rgb(0, 66, 161)")

		vm = $(this).html();
	});
	

	function fahrradBerechnen(){
		let km = $("#eingabe").val();
		let zeit_min = km * 3;
		let kcal = 7 * zeit_min;

		$("#div7").html("Dauer: " + zeit_min + " min<br>" + "Kalorien: " + kcal);
	}
	function zuFußBerechnen(){
		let km = $("#eingabe").val();
		let zeit_min = km * 12;
		let kcal = 4 * zeit_min;
		$("#div7").html("Dauer: " + zeit_min + " min<br>" + "Kalorien: " + kcal);
	}
	function autoBerechnen(){
		let km = $("#eingabe").val();
		let zeit_min = km * 1;
		let kcal = 2 * zeit_min;
		$("#div7").html("Dauer: " + zeit_min + " min<br>" + "Kalorien: " + kcal);
	}
});