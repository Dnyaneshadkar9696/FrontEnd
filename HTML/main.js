const form = document.getElementById("registrationForm");

if (form) {
	form.addEventListener("submit", function (event) {
		event.preventDefault();
		const message = encodeURIComponent("Form submitted successfully. Thank you for registering.");
		window.location.href = `Submit.html?message=${message}`;
	});
}
