$(document).ready(function() {
	// when document loaded:

	$("#d1").mouseup(klonZufall);

	for(let a = 1; a < 1000; a++){
		klonZufall()
	}
	

});

function klonZufall(){
	let klon = $("#d1").clone();
	let l = Math.floor(Math.random()*101)+1;
	let t = Math.floor(Math.random()*101)+1;

	let rot = Math.floor(Math.random()*256);
	let gruen = Math.floor(Math.random()*256);
	let blau = Math.floor(Math.random()*256);

	klon.css("left",l+"%");
	klon.css("top",t+"%");
	klon.css("background-color","rgb("+rot+","+gruen+","+ blau + ")");

	klon.appendTo("body");

}