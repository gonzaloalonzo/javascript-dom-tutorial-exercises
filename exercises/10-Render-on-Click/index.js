let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
			
		var para = document.createElement("DIV");
		para.innerHTML ="Hello World";
		document.body.appendChild(para);	
		document.querySelector("div").style.backgroundColor = "yellow";
		
	
		
});
