window.onload = function(){

//	FUNCTION FOR SELECTING BETWEEN X'S AND O'S
	var taco = true
	var boxes = document.getElementsByClassName("box");
	var holder = [0,0,0,0,0,0,0,0,0];

	for (i = 0; i < boxes.length; i++) {
			boxes[i].onclick = function() {
				

				if (this.innerHTML === "O") {
					alert("Pick another square hombre!");
				} else {
					if (taco === true ) {
						this.innerHTML = "X";
						this.style.color = "red";
						holder.splice(this.i, 1, "X");
						taco = false;

			} 	else 	{ 
					while (taco === false ) {
						this.innerHTML = "O";
						this.style.color = "blue";
						holder.splice(this.i, 1, "O");
						taco = true;

						}
					}
				} 
				console.log(holder) 
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
console.log(holder)
}
