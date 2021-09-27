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
		