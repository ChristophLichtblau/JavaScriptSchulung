let trommel = [];


$(document).ready(function() {
	// when document loaded:
	
	

	$("#button").on("mouseup",function() {
			ziehung();
	});

});

function ziehung(){
	trommelFuellen();

	for(let x = 0; x< 6; x++){
		let index =  Math.floor(Math.random() * (49-x));

		$("#z"+x).html(trommel[index]);

		trommel.splice(index,1);

	}

	function trommelFuellen(){
		for(let x=0;x<49;x++){
			trommel[x] = x+1;
		}
	}

}