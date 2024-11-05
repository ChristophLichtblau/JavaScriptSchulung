function rotBlenden(){
	$("#rot").fadeOut(1000);
	$("#rot").fadeIn(1000);
}
function blauBlenden(){
	$("#blau").fadeOut(1000);
	$("#blau").fadeIn(1000);
}
function gruenBlenden(){
	$("#gruen").fadeOut(1000);
	$("#gruen").fadeIn(1000);
}

$("#rot").click(rotBlenden);
$("#blau").click(blauBlenden);
$("#gruen").click(gruenBlenden);