//Create Waiting Room Overlay

const s = document.createElement('style');
s.innerText = `
	#overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		font-color:#fff;
		font-size:24px;
		background-color: #000;
		filter:alpha(opacity=95);
		-moz-opacity:0.95;
		-khtml-opacity: 0.95;
		opacity: 0.75;
		z-index: 10000;

	}
	#waitingRoom {
		position: absolute;
		top: 50%;
		left: 50%;
		font-size: 25px;
		color: white;
		text-align:center;
		transform: translate(-50%,-50%);
		-ms-transform: translate(-50%,-50%);
	}
`;
const overlay = jQuery('<div id="overlay"><div id="waitingRoom"><h2>Waiting for host to start meeting.</h2>Will join automatically when ready... Reloading in <span id="secondsToRefresh"></span></div></div>');

var joinTimer = '';
var reloadTimer = '';
var secondsToRefresh = 15;
//Create Waiting Room Overlay Div
$(document).ready(createWaitingRoom);

// .F0Ljwf is the "Reload" button while waiting for the teacher to START the meeting.
function createWaitingRoom(){
  if 	($('.F0Ljwf').length > 0){
    console.log("Found reload button.");
		document.body.prepend(s);
		overlay.appendTo(document.body);
    document.getElementById("secondsToRefresh").innerHTML = secondsToRefresh;
		//$('.d7iDfe.NONs6c').hide();
		reloadTimer = setInterval(hammerReload, 100);
	}
}

// click Reload until meeting starts.
function hammerReload() {
  // get number and set number!
  // Assuming we are updating every .1 seconds.
  var toGo = Number(document.getElementById("secondsToRefresh").innerHTML).toFixed(1);
  if ($('.F0Ljwf').is(':visible') && toGo == 0.0) {
    clearInterval(reloadTimer);
    console.log("Clicking button...");
    document.querySelector('.WNaQqc').click();
  }else{
    console.log(toGo);
    document.getElementById("secondsToRefresh").innerHTML = (toGo - 0.1).toFixed(1);
  }
}
