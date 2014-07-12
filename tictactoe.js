window.onload = function(){

//	FUNCTION FOR SELECTING BETWEEN X'S AND O'S
	var taco = true
	var boxes = document.getElementsByClassName("box");

	for (i = 0; i < boxes.length; i++) {
			boxes[i].onclick = function() {
				if (this.innerHTML === "O") {
					alert("Pick another square hombre!");
				} else {
					if (taco === true ) {
						this.innerHTML = "X";
						this.style.color = "red"
						taco = false;

			} 	else 	{ 
					while (taco === false ) {
						this.innerHTML = "O";
						this.style.color = "blue";
							taco = true;

						}
					}
				}  
			} 
		}


//RESET BUTTON

	var revive = document.getElementById("reset");

	revive.onclick = function() {
		for (j = 0; j < boxes.length; j++){
			boxes[j].innerHTML = "";
		}
	};
// COLOR PICKER - its OK to pick your nose, and your colors and your friends colors, but...

}

