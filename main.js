const button = document.querySelector(".container");
const toggle = document.querySelector(".toggle-btn");

function  btnToggle() {
  function toggleBasic() {
		let x = document.getElementById("yearly-basic");
		let y = document.getElementById("monthly-basic");

		if (x.style.display === "block"){
			x.style.display = "none";
			y.style.display = "block";
		} else {
				x.style.display = "block";
				y.style.display = "none";
		}
	}

	function togglePro() {
		let x = document.getElementById("yearly-pro");
		let y = document.getElementById("monthly-pro");

		if (x.style.display === "block"){
			x.style.display = "none";
			y.style.display = "block";
		} else {
				x.style.display = "block";
				y.style.display = "none";
		}
	}

	function toggleMaster() {
		let x = document.getElementById("yearly-master");
		let y = document.getElementById("monthly-master");

		if (x.style.display === "block"){
			x.style.display = "none";
			y.style.display = "block";
		} else {
				x.style.display = "block";
				y.style.display = "none";
		}
	}
	toggleBasic();
	togglePro();
	toggleMaster();
}

button.addEventListener("click", function () {
	toggle.classList.toggle('active');
});




