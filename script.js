const formTitle = document.getElementById("form-title");
const confirmPasswordContainer = document.getElementById("confirm-password-container");
const submitButton = document.getElementById("submit");
const toggleLink = document.getElementById("toggle-link");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");

function toggleAuth() {
	const isLoginForm = formTitle.textContent === "Login";
	formTitle.textContent = isLoginForm ? "Sign Up" : "Login";
	submitButton.textContent = isLoginForm ? "Sign Up" : "Login";
	toggleLink.textContent = isLoginForm ? "Login" : "Sign Up";
	confirmPasswordContainer.style.display = isLoginForm ? "block" : "none";
}

const users = []

function login(username, password) {
	const user = users.find(user => user.username === username && user.password === password);

	if (username === "" && password === "") {
		alert("Please enter your username and password.");
	}
	else if (username === "") {
		alert("Please enter your username.");
	}
	else if (password === "") {
		alert("Please enter your password.");
	}
	else if (user) {
		alert("Login Successful!");
		document.getElementById("username").value = "";
		document.getElementById("password").value = "";
	}
	else {
		alert("User Not Found! Please sign up first.");
		toggleAuth();
		document.getElementById("username").value = "";
		document.getElementById("password").value = "";
	}
}

function signUp(username, password, confirmPassword) {
	const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

	if (username === "" || password === "" || confirmPassword === "") {
		alert("Please fill in the blank.");
	}
	else if (password !== confirmPassword) {
		alert("Passwords Do Not Match!");
		document.getElementById("password").value = "";
		document.getElementById("confirm-password").value = "";
	}
	else if (!passwordPattern.test(password)) {
		alert("Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character!");
		document.getElementById("password").value = "";
		document.getElementById("confirm-password").value = "";
	}
	else {
		users.push({ username: username, password: password });
		alert("Sign Up Successful! You can now proceed to log in.");
		toggleAuth();
		document.getElementById("username").value = "";
		document.getElementById("password").value = "";
	}
}

function handleSubmit() {
	const isLoginForm = formTitle.textContent === "Login";
	const username = usernameInput.value;
	const password = passwordInput.value;
	const confirmPassword = confirmPasswordInput.value;

	if (isLoginForm) {
		login(username, password);
	}
	else {
		signUp(username, password, confirmPassword);
	}
}