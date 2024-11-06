$(document).ready(function() {
	// when document loaded:

	$("#button").on("mouseup",function() {

		$("#wuerfelzahl").html("");
		$("#wuerfelbild").attr("src","img/wuerfel0.png");
		 let sound = new Audio("sound/wuerfeln.mp3");
		 sound.play();
		setTimeout(wuerfelanzeigen,1000)
	});

});
function wuerfelanzeigen(){
	let zahl = Math.floor(Math.random()*6)+1;
		$("#wuerfelzahl").html(zahl);
		
			$("#wuerfelbild").attr("src","img/wuerfel"+ zahl + ".png");
}