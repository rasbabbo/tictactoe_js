window.onload = function(){


	var taco = true
	var boxes = document.getElementsByClassName("box");

	for (i = 0; i < boxes.length; i++) {
			boxes[i].onclick = function() {
				if (taco === true) {
				this.innerHTML = "X";
				taco = false;
				} else { 
					while (taco === false) {
					this.innerHTML = "0";
					taco = true;
				}
			}
	}
}
}