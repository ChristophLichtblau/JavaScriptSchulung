$(document).ready(function() {
	// Punkte am Anfang auf 0 setzen
	let punkte = 0;
  
	// Event-Handler für den Button
	$("#button").on("mouseup", function() {
	  // Anzeige zurücksetzen
	  $("#wuerfelzahl").html("");
	  $("#wuerfelbild1").attr("src", "img/wuerfel0.png");
	  $("#wuerfelbild2").attr("src", "img/wuerfel0.png");
  
	  // Sound abspielen
	  let sound = new Audio("sound/wuerfeln.mp3");
	  sound.play();
  
	  // Funktion `wuerfelanzeigen` nach einer Sekunde aufrufen
	  setTimeout(wuerfelanzeigen, 1000);
	});
	$("#wuerfelzahl").mouseup(function(){
		$("#wuerfelzahl").html(0);
		$("#wuerfelbild1").attr("src", "img/wuerfel0.png");
	  $("#wuerfelbild2").attr("src", "img/wuerfel0.png");
	  punkte=0;
	});
  
	// Funktion zum Anzeigen der Würfelzahlen und zum Berechnen der Punkte
	function wuerfelanzeigen() {
	  let zahl1 = Math.floor(Math.random() * 6) + 1;
	  let zahl2 = Math.floor(Math.random() * 6) + 1;
  
	  // Bilder für die gewürfelten Zahlen anzeigen
	  $("#wuerfelbild1").attr("src", "img/wuerfel" + zahl1 + ".png");
	  $("#wuerfelbild2").attr("src", "img/wuerfel" + zahl2 + ".png");
  
	  // Punkte aktualisieren
	  punkte += zahl1 + zahl2;
	  
  
	   Optional: 
	  if (zahl1 === zahl2) {
		punkte = 0;
		$("#wuerfelzahl").html(punkte);
	  } else {
		$("#wuerfelzahl").html(punkte);
	  }
	  
	}
  });
  