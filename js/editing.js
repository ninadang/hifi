"use strict";
(function() {
	window.addEventListener("load", load);

	function load(){
		var temp = $(".reply");
		for (var i=0;i<temp.length;i++){ 
			temp[i].addEventListener("click", reply);
		}
	}

	function reply(){
		var pTag = this.parentNode; 					//Parent Node
		var replyBox = document.createElement("div");	//Reply box
		var text = document.createElement("textarea");	//Text in replybox
		text.setAttribute("autofocus", "autofocus");
		text.setAttribute("required", "required");
		text.setAttribute("rows", "10");
		text.setAttribute("cols", "100");
		text.setAttribute("id", "entry");
		text.style.resize = "none";
		text.style.float = "left";
		if(this.innerHTML == "Edit"){
			var temp = this.parentNode;
			text.value = this.previousSibling.nodeValue;
		}
		replyBox.appendChild(text);							//Add textbox into the reply box
		var submit = document.createElement("button");
		submit.setAttribute("type", "button");
		submit.innerHTML = "Submit";
		//Classes for appearance from bootstrap. Not familiar with them.
		submit.classList.add("btn");
		submit.classList.add("btn-info");
		submit.style.float = "left";
		submit.style.clear = "both";
		submit.addEventListener("click", edit);
		replyBox.appendChild(submit);

		var quit = document.createElement("button");
		quit.setAttribute("type", "button");
		quit.innerHTML = "Exit";
		//Classes for appearance from bootstrap. Not familiar with them.
		quit.classList.add("btn");
		quit.classList.add("btn-info");
		quit.addEventListener("click", exit);
		quit.style.float = "left";
		replyBox.appendChild(quit);

		//Reply box styles
		replyBox.style.position = "fixed";
		replyBox.style.top = "25%";
		replyBox.style.left = "25%";
		replyBox.style.backgroundColor = "grey";
		replyBox.style.padding = "10px";
		replyBox.style.overflow = "auto";
		pTag.appendChild(replyBox);						//Add box to screen, I don't remember what to append it to but it shouldnt matter (since fixed position)
		replyBox.setAttribute("id", "replyBox");
	}

	function edit(){
		var newsubmit = document.createElement("div");
		newsubmit.style.backgroundColor = "#D9EEFC";
		newsubmit.classList.add("re-reply");
		var p = document.createElement("p");
		p.innerHTML = "[<a href=\"#\">Scooby-Doo</a>] <span id=\"timestamp\">Just now</span><p>";
		var p2 = document.createElement("p");
		var button = document.createElement("button");
		button.setAttribute("type", "button");
		button.classList.add("btn");
		button.classList.add("btn-danger");
		button.classList.add("btn-xs");
		button.classList.add("wrong");
		button.classList.add("reply");
		button.innerHTML = "Edit";
		button.addEventListener("click", reply);
		p2.innerHTML = document.getElementById("entry").value;
		// p2.appendChild(document.getElementById("entry").value);
		p2.appendChild(button);
		if(this.parentNode.parentNode.firstChild.nextSibling.innerHTML == "Edit"){
			this.parentNode.parentNode.firstChild.nodeValue = document.getElementById("entry").value;
		} else {
			this.parentNode.parentNode.parentNode.appendChild(newsubmit);
		}
		newsubmit.appendChild(p)
		newsubmit.appendChild(p2);
		exit();
	}

	function exit(){
		var box = document.getElementById("replyBox");
		box.parentNode.removeChild(box);
	}
})();
