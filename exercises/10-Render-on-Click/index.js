let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	

		
		var para = document.createElement("div");
		para.innerHTML ="<div>Hello World</div>";
		document.querySelector("div").style.backgroundColor = "yellow";
		document.body.append(para);
	

});
