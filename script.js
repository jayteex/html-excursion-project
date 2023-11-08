const toggleButton = document.getElementById("toggle-button");
const hiddenContent = document.getElementById("hidden-content");

toggleButton.addEventListener("click", function () {
	if (hiddenContent.style.display === "none" || hiddenContent.style.display === "") {
		hiddenContent.style.display = "block"; // Show the hidden content
		toggleButton.textContent = "Hide Video"; // Change the button text
	} else {
		hiddenContent.style.display = "none"; // Hide the hidden content
		toggleButton.textContent = "Show Video Presentation"; // Change the button text
	}
});








