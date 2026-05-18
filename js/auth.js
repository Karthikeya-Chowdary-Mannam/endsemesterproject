function signup(){

    const email =
        document.getElementById("signupEmail").value;

    const password =
        document.getElementById("signupPassword").value;

    if(email === "" || password === ""){

        alert("Please fill all fields");

        return;
    }

    localStorage.setItem("userEmail", email);

    localStorage.setItem("userPassword", password);

    alert("Account Created Successfully");

    window.location.href = "login.html";
}

function login(){

    const email =
        document.getElementById("loginEmail").value;

    const password =
        document.getElementById("loginPassword").value;

    const savedEmail =
        localStorage.getItem("userEmail");

    const savedPassword =
        localStorage.getItem("userPassword");

    if(email === savedEmail &&
       password === savedPassword){

        localStorage.setItem("loggedInUser", email);

        alert("Login Successful");

        window.location.href = "dashboard.html";
    }
    else{

        alert("Invalid Credentials");
    }
}

function logout(){

    localStorage.removeItem("loggedInUser");

    window.location.href = "login.html";
}