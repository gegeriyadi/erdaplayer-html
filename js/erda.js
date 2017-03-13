
// clik play/pause
$(document).ready(function(){

$("#zen").click(function(){
var aud = document.getElementById("audioStream");
	if (aud.paused) {
		$('#zen').addClass('play');
		aud.play();
		document.getElementById("status").innerHTML = "Status: ON";
	} else {
		$('#zen .circle').removeClass( "rotate" );
		$("#zen").removeClass( "play" );
		aud.pause();
		document.getElementById("status").innerHTML = "Status: OFF - Press Play button!";
	}
});

});