const toggleOn = document.querySelector(".toggle-on-cont");
const active = document.querySelector(".menu-container");
const toggleOff = document.querySelector(".toggle-off-cont");
const logo = document.querySelector(".logo-img");

toggleOn.addEventListener("click", function () {
	active.classList.toggle("press");
});

toggleOn.addEventListener("click", function () {
	toggleOff.classList.toggle("press2");
});

toggleOn.addEventListener("click", function() {
	toggleOn.classList.toggle("press3")
});

toggleOff.addEventListener("click", function() {
	active.classList.toggle("press")
});

toggleOff.addEventListener("click", function() {
	toggleOff.classList.toggle("press2")
});

toggleOff.addEventListener("click", function() {
	toggleOn.classList.toggle("press3")
});

toggleOn.addEventListener("click", function() {
	logo.classList.toggle("press3")
})

toggleOff.addEventListener("click", function() {
	logo.classList.toggle("press3")
})

const tab1 = document.querySelector("#bookmark-div");
const tab2 = document.querySelector("#intelligent-div");
const tab3 = document.querySelector("#share-div");
const main = document.getElementById("feature-btn-cont");
const btn1 = document.getElementById("simple-btn");
const btn2 = document.getElementById("speedy-btn");
const btn3 = document.getElementById("easy-btn");
const border1 = document.getElementById("border-cont1");
const border2 = document.getElementById("border-cont2");
const border3 = document.getElementById("border-cont3");

let screen = window.matchMedia( "(max-width: 767px)" )

if (screen.matches) {
	function toggleSimple() {
	if (tab1.style.display === "none") {
		tab1.style.display = "block";
		tab2.style.display = "none";
		tab3.style.display = "none";
		border1.style.visibility = "visible";
		border2.style.visibility = "hidden";
		border3.style.visibility = "hidden";
		btn1.style.color = "hsl(0, 0%, 0%)";
		btn2.style.color = "hsl(229, 8%, 50%)";
		btn3.style.color = "hsl(229, 8%, 50%)";
		tab1.style.transition = "0.3s ease-in-out";
		tab2.style.transition = "0.3s ease-in-out";
		tab3.style.transition = "0.3s ease-in-out";
	} else {
		tab1.style.display = "block"
		tab2.style.display ="none";
		tab3.style.display = "none";
		border1.style.visibility = "visible";
		border2.style.visibility = "hidden";
		border3.style.visibility = "hidden";
		btn1.style.color = "hsl(0, 0%, 0%)";
		btn2.style.color = "hsl(229, 8%, 50%)";
		btn3.style.color = "hsl(229, 8%, 50%)";
		tab1.style.transition = "0.3s ease-in-out";
		tab2.style.transition = "0.3s ease-in-out";
		tab3.style.transition = "0.3s ease-in-out";
		btn1.addEventListener("click", function() {
			tab1.classList.toggle("select-1")
		});
	}
}
		
function toggleSpeedy() {
	if (tab2.style.display === "none") {
		tab2.style.display = "block";
		tab1.style.display = "none";
		tab3.style.display = "none";
		border1.style.visibility = "hidden";
		border2.style.visibility = "visible";
		border3.style.visibility = "hidden";
		btn1.style.color = "hsl(229, 8%, 50%)";
		btn2.style.color = "hsl(0, 0%, 0%)";
		btn3.style.color = "hsl(229, 8%, 50%)";
		tab1.style.transition = "0.3s ease-in-out";
		tab2.style.transition = "0.3s ease-in-out";
		tab3.style.transition = "0.3s ease-in-out";
	} else {
		tab2.style.display = "block";
		tab1.style.display = "none";
		tab3.style.display = "none";
		border1.style.visibility = "hidden";
		border2.style.visibility = "visible";
		border3.style.visibility = "hidden";
		btn1.style.color = "hsl(229, 8%, 50%)";
		btn2.style.color = "hsl(0, 0%, 0%)";
		btn3.style.color = "hsl(229, 8%, 50%)";
		tab1.style.transition = "0.3s ease-in-out";
		tab2.style.transition = "0.3s ease-in-out";
		tab3.style.transition = "0.3s ease-in-out";
		btn2.addEventListener("click", function() {
			tab2.classList.toggle("select-1")
		});
	}	
}
		
function toggleEasy() {
	if (tab3.style.display === "none") {
		tab3.style.display = "block";
		tab1.style.display = "none";
		tab2.style.display = "none";
		border1.style.visibility = "hidden";
		border2.style.visibility = "hidden";
		border3.style.visibility = "visible";
		btn1.style.color = "hsl(229, 8%, 50%)";
		btn2.style.color = "hsl(229, 8%, 50%)";
		btn3.style.color = "hsl(0, 0%, 0%)";
		tab1.style.transition = "0.3s ease-in-out";
		tab2.style.transition = "0.3s ease-in-out";
		tab3.style.transition = "0.3s ease-in-out";
	} else {
		tab1.style.display = "none";
		tab2.style.display = "none";
		tab3.style.display = "block";
		border1.style.visibility = "hidden";
		border2.style.visibility = "hidden";
		border3.style.visibility = "visible";
		btn1.style.color = "hsl(229, 8%, 50%)";
		btn2.style.color = "hsl(229, 8%, 50%)";
		btn3.style.color = "hsl(0, 0%, 0%)";
		tab1.style.transition = "0.3s ease-in-out";
		tab2.style.transition = "0.3s ease-in-out";
		tab3.style.transition = "0.3s ease-in-out";
		btn3.addEventListener("click", function() {
			tab3.classList.toggle("select-1")
		});
	}
}
} else {
	function toggleSimple() {
	if (tab1.style.visibility === "hidden") {
		tab1.style.visibility = "visible";
		tab2.style.visibility = "hidden";
		tab3.style.visibility = "hidden";
		tab1.style.height = "100%";
		tab2.style.height = "0";
		tab3.style.height = "0";
		border1.style.visibility = "visible";
		border2.style.visibility = "hidden";
		border3.style.visibility = "hidden";
		btn1.style.color = "hsl(0, 0%, 0%)";
		btn2.style.color = "hsl(229, 8%, 50%)";
		btn3.style.color = "hsl(229, 8%, 50%)";
		tab1.style.transition = "0.3s ease-in-out";
		tab2.style.transition = "0.3s ease-in-out";
		tab3.style.transition = "0.3s ease-in-out";

	} else {
		tab1.style.visibility = "visible"
		tab2.style.visibility ="hidden";
		tab3.style.visibility = "hidden";
		tab1.style.height = "100%";
		tab2.style.height = "0";
		tab3.style.height = "0";
		border1.style.visibility = "visible";
		border2.style.visibility = "hidden";
		border3.style.visibility = "hidden";
		btn1.style.color = "hsl(0, 0%, 0%)";
		btn2.style.color = "hsl(229, 8%, 50%)";
		btn3.style.color = "hsl(229, 8%, 50%)";
		tab1.style.transition = "0.3s ease-in-out";
		tab2.style.transition = "0.3s ease-in-out";
		tab3.style.transition = "0.3s ease-in-out";
		btn1.addEventListener("click", function() {
			tab1.classList.toggle("select-1")
		});
	}
}
		
function toggleSpeedy() {
	if (tab2.style.visibility === "hidden") {
		tab2.style.visibility = "visible";
		tab1.style.visibility = "hidden";
		tab3.style.visibility = "hidden";
		border1.style.visibility = "hidden";
		border2.style.visibility = "visible";
		border3.style.visibility = "hidden";
		btn1.style.color = "hsl(229, 8%, 50%)";
		btn2.style.color = "hsl(0, 0%, 0%)";
		btn3.style.color = "hsl(229, 8%, 50%)";
		tab1.style.transition = "0.3s ease-in-out";
		tab2.style.transition = "0.3s ease-in-out";
		tab3.style.transition = "0.3s ease-in-out";
	} else {
		tab2.style.visibility = "visible";
		tab1.style.visibility = "hidden";
		tab3.style.visibility = "hidden";
		tab2.style.height = "100%";
		tab1.style.height = "0";
		tab3.style.height = "0";
		border1.style.visibility = "hidden";
		border2.style.visibility = "visible";
		border3.style.visibility = "hidden";
		btn1.style.color = "hsl(229, 8%, 50%)";
		btn2.style.color = "hsl(0, 0%, 0%)";
		btn3.style.color = "hsl(229, 8%, 50%)";
		tab1.style.transition = "0.3s ease-in-out";
		tab2.style.transition = "0.3s ease-in-out";
		tab3.style.transition = "0.3s ease-in-out";
		btn2.addEventListener("click", function() {
			tab2.classList.toggle("select-1")
		});
	}	
}
		
function toggleEasy() {
	if (tab3.style.visibility === "hidden") {
		tab3.style.visibility = "visible";
		tab1.style.visibility = "hidden";
		tab2.style.visibility = "hidden";
		tab3.style.height = "100%";
		tab2.style.height = "0";
		tab1.style.height = "0";
		border1.style.visibility = "hidden";
		border2.style.visibility = "hidden";
		border3.style.visibility = "visible";
		btn1.style.color = "hsl(229, 8%, 50%)";
		btn2.style.color = "hsl(229, 8%, 50%)";
		btn3.style.color = "hsl(0, 0%, 0%)";
		tab1.style.transition = "0.3s ease-in-out";
		tab2.style.transition = "0.3s ease-in-out";
		tab3.style.transition = "0.3s ease-in-out";
	} else {
		tab1.style.visibility = "hidden";
		tab2.style.visibility = "hidden";
		tab3.style.visibility = "visible";
		tab3.style.height = "100%";
		tab2.style.height = "0";
		tab1.style.height = "0";
		border1.style.visibility = "hidden";
		border2.style.visibility = "hidden";
		border3.style.visibility = "visible";
		btn1.style.color = "hsl(229, 8%, 50%)";
		btn2.style.color = "hsl(229, 8%, 50%)";
		btn3.style.color = "hsl(0, 0%, 0%)";
		tab1.style.transition = "0.3s ease-in-out";
		tab2.style.transition = "0.3s ease-in-out";
		tab3.style.transition = "0.3s ease-in-out";
		btn3.addEventListener("click", function() {
			tab3.classList.toggle("select-1")
		});
	}
}
}

let faq1;
let faq2;
let faq3;
let faq4;

function show_hide_faq1() {
	if (faq1==1) {
		document.getElementById("faq-answer1").style.display="none";
		document.getElementById("open-arrow1").style.display="block";
		document.getElementById("close-arrow1").style.display="none";
		document.getElementById("open-arrow1").style.transform="rotate(0deg)"
		return faq1=0;
	} else {
		document.getElementById("faq-answer1").style.display="block";
		document.getElementById("close-arrow1").style.transform="rotate(180deg)";
		document.getElementById("close-arrow1").style.display="block";
		document.getElementById("open-arrow1").style.transform="rotate(180deg)"
		return faq1=1;
	}		
}

function show_hide_faq2() {
	if (faq2==1) {
		document.getElementById("faq-answer2").style.display="none";
		document.getElementById("open-arrow2").style.display="block";
		document.getElementById("close-arrow2").style.display="none";
		document.getElementById("open-arrow2").style.transform="rotate(0deg)"
		return faq2=0;
	} else {
		document.getElementById("faq-answer2").style.display="block";
		document.getElementById("close-arrow2").style.transform="rotate(180deg)";
		document.getElementById("close-arrow2").style.display="block";
		document.getElementById("open-arrow2").style.transform="rotate(180deg)"
		return faq2=1;
	}		
}

function show_hide_faq3() {
	if (faq3==1) {
		document.getElementById("faq-answer3").style.display="none";
		document.getElementById("open-arrow3").style.display="block";
		document.getElementById("close-arrow3").style.display="none";
		document.getElementById("open-arrow3").style.transform="rotate(0deg)"
		return faq3=0;
	} else {
		document.getElementById("faq-answer3").style.display="block";
		document.getElementById("close-arrow3").style.transform="rotate(180deg)";
		document.getElementById("close-arrow3").style.display="block";
		document.getElementById("open-arrow3").style.transform="rotate(180deg)"
		return faq3=1;
	}		
}

function show_hide_faq4() {
	if (faq4==1) {
		document.getElementById("faq-answer4").style.display="none";
		document.getElementById("open-arrow4").style.display="block";
		document.getElementById("close-arrow4").style.display="none";
		document.getElementById("open-arrow4").style.transform="rotate(0deg)"
		return faq4=0;
	} else {
		document.getElementById("faq-answer4").style.display="block";
		document.getElementById("close-arrow4").style.transform="rotate(180deg)";
		document.getElementById("close-arrow4").style.display="block";
		document.getElementById("open-arrow4").style.transform="rotate(180deg)"
		return faq4=1;
	}		
}