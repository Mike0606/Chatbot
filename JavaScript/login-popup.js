var loginform = document.getElementById("loginPopup");
var loginBtn = document.getElementById("loginBtn");
var closeLoginBtn = document.getElementById("closeLogin");

loginBtn.addEventListener("click", ()=>{
    loginform.style.display="block";
})

closeLoginBtn.addEventListener("click", ()=>{
    loginform.style.display="none";
})
