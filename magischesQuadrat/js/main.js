$(document).ready(function() {
	// when document loaded:

	$("#button").on("mouseup",function() {
		quadratBefuellen();
	});

	function quadratBefuellen(){
		let a = $("#a").val()*1;
		let b = $("#b").val()*1;

		$("#div1").html(a+b);
		$("#div2").html(a);
		$("#div3").html(12*a);
		$("#div4").html(7*a);
		$("#div5").html(11*a);
		$("#div6").html(8*a);
		$("#div7").html(b);
		$("#div8").html(2*a);
		$("#div9").html(5*a);
		$("#div10").html(10*a);
		$("#div11").html(3*a);
		$("#div12").html(3*a+b);
		$("#div13").html(4*a);
		$("#div14").html(2*a+b);
		$("#div15").html(6*a);
		$("#div16").html(9*a);

	}

});