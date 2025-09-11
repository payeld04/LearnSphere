document.addEventListener("DOMContentLoaded", function () {
    // Login Elements
    const loginButton = document.querySelector(".btn");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const googleButton = document.querySelector(".bxl-google");
    const facebookButton = document.querySelector(".bxl-facebook");
    const githubButton = document.querySelector(".bxl-github");
    const twitterButton = document.querySelector(".bxl-twitter");
    
    // Signup Elements
    const signUpButton = document.querySelector("button");

    // Login function
    function login() {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === "" || password === "") {
            alert("Please enter valid credentials!");
            return;
        }
        
        // Simulate authentication (Replace with actual backend authentication later)
        localStorage.setItem("username", username);
        alert("Login successful!");
        window.location.href = "dashboard.html"; // Redirect to dashboard
    }

    // Social login placeholders (implement OAuth later)
    function googleLogin() {
        alert("Google Login Clicked");
    }

    function facebookLogin() {
        alert("Facebook Login Clicked");
    }
    
    function githubLogin() {
        alert("GitHub Login Clicked");
    }
    
    function twitterLogin() {
        alert("Twitter Login Clicked");
    }

    // Signup function
    function signUp() {
        const firstName = document.getElementById("first-name").value.trim();
        const lastName = document.getElementById("last-name").value.trim();
        const regNo = document.getElementById("reg-no").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.querySelector("input[placeholder='password']").value.trim();
        const confirmPassword = document.querySelector("input[placeholder='confirm password']").value.trim();
        const dob = document.getElementById("dob").value.trim();
        const gender = document.getElementById("gender").value;

        if (!firstName || !lastName || !regNo || !email || !password || !confirmPassword || !dob || !gender) {
            alert("Please fill all the fields before signing up!");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Store user data for login
        const userData = {
            firstName,
            lastName,
            regNo,
            email,
            password, // Store securely in a real application
            dob,
            gender
        };

        localStorage.setItem("userData", JSON.stringify(userData));
        alert("Account created successfully! You can now log in.");
        window.location.href = "index.html"; // Redirect to login after signup
    }

    // Event listeners
    loginButton.addEventListener("click", login);
    googleButton.addEventListener("click", googleLogin);
    facebookButton.addEventListener("click", facebookLogin);
    githubButton.addEventListener("click", githubLogin);
    twitterButton.addEventListener("click", twitterLogin);
    signUpButton.addEventListener("click", signUp);
});
