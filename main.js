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

function toggleSimple() {
	if (tab1.style.display === "none") {
		tab1.style.display = "block";
		tab2.style.display = "none";
		tab3.style.display = "none";
	} else {
		tab1.style.display = "block"
		tab2.style.display ="none";
		tab3.style.display = "none";
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
	} else {
		tab2.style.display = "block";
		tab1.style.display = "none";
		tab3.style.display = "none";
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
	} else {
		tab1.style.display = "none";
		tab2.style.display = "none";
		tab3.style.display = "block";
		btn3.addEventListener("click", function() {
			tab3.classList.toggle("select-1")
		});
	}
}	

let faq1;
let faq2;
let faq3;
let faq4;

function show_hide_faq1() {
	if (faq1==1) {
		document.getElementById("faq-answer1").style.display="none";
		document.getElementById("open-arrow1").style.transform="rotate(0deg)";
		document.getElementById("open-arrow1").style.filter="invert(0.33) sepia(1) saturate(10.8) hue-rotate(130.6deg) brightness(1);";
		return faq1=0;
	} else {
		document.getElementById("faq-answer1").style.display="block";
		document.getElementById("open-arrow1").style.transform="rotate(180deg)";
		document.getElementById("open-arrow1").style.filter="invert(0.80) sepia(1) saturate(5.8) hue-rotate(80.6deg) brightness(1);";
		return faq1=1;
	}		
}

function show_hide_faq2() {
	if (faq2==1) {
		document.getElementById("faq-answer2").style.display="none";
		document.getElementById("open-arrow2").style.transform="rotate(0deg)";
		document.getElementById("open-arrow2").style.filter="invert(0.33) sepia(1) saturate(10.8) hue-rotate(130.6deg) brightness(1);";
		return faq2=0;
	} else {
		document.getElementById("faq-answer2").style.display="block";
		document.getElementById("open-arrow2").style.transform="rotate(180deg)";
		document.getElementById("open-arrow2").style.filter="invert(0.80) sepia(1) saturate(5.8) hue-rotate(80.6deg) brightness(1);";
		return faq2=1;
	}		
}

function show_hide_faq3() {
	if (faq3==1) {
		document.getElementById("faq-answer3").style.display="none";
		document.getElementById("open-arrow3").style.transform="rotate(0deg)";
		document.getElementById("open-arrow3").style.filter="invert(0.33) sepia(1) saturate(10.8) hue-rotate(130.6deg) brightness(1);";
		return faq3=0;
	} else {
		document.getElementById("faq-answer3").style.display="block";
		document.getElementById("open-arrow3").style.transform="rotate(180deg)";
		document.getElementById("open-arrow3").style.filter="invert(0.80) sepia(1) saturate(5.8) hue-rotate(80.6deg) brightness(1);";
		return faq3=1;
	}	
}

function show_hide_faq4() {
	if (faq4==1) {
			document.getElementById("faq-answer4").style.display="none";
			document.getElementById("open-arrow4").style.transform="rotate(0deg)";
			document.getElementById("open-arrow4").style.filter="invert(0.33) sepia(1) saturate(10.8) hue-rotate(130.6deg) brightness(1);";
			return faq4=0;
		} else {
			document.getElementById("faq-answer4").style.display="block";
			document.getElementById("open-arrow4").style.transform="rotate(180deg)";
			document.getElementById("open-arrow4").style.filter="invert(0.80) sepia(1) saturate(5.8) hue-rotate(80.6deg) brightness(1);";
			return faq4=1;
	}	
}
		