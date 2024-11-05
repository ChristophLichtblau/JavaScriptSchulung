$(document).ready(function() {
	// when document loaded:
	

	$("#titel").html("Złoty in Euro");

	$("#button").on("mouseup",function() {
		$("#ausgabe").html(verdoppeln);
	});


	function verdoppeln(){
		return  ($("#eingabe").val() / 4.36).toFixed(2) + "€"  ;
	}
});