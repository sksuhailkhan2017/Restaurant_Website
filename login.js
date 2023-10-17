const loginTabButton=document.querySelector(".loginText")
const signupTabButton=document.querySelector(".signupText")
const loginTab = document.querySelector(".loginTab")
const signupTab= document.querySelector(".signupTab")
const loginShowPasswordButton = loginTab.querySelector(".eye");
const loginHidePasswordButton = loginTab.querySelector(".slashEye");
const signupShowPasswordButton = signupTab.querySelector(".eye");
const signupHidePasswordButton = signupTab.querySelector(".slashEye");
const loginPassword=document.querySelector("#loginPassword")
const signupPassword=document.querySelector("#signupPassword")



loginTabButton.addEventListener("click",()=>{
    
     loginTab.classList.add("showTab");
     loginTab.classList.remove("hideTab");
     signupTab.classList.add("hideTab");
     signupTab.classList.remove("showTab");
     loginTabButton.style.backgroundColor="rgba(95,158,160,0.2)"
     signupTabButton.style.backgroundColor="transparent"
})

signupTabButton.addEventListener("click",()=>{
  
    signupTab.classList.add("showTab");
    signupTab.classList.remove("hideTab");
    loginTab.classList.add("hideTab");
    loginTab.classList.remove("showTab");
    signupTabButton.style.backgroundColor="rgba(95,158,160,0.2)"
    loginTabButton.style.backgroundColor="transparent"
})


loginShowPasswordButton.addEventListener("click",() => {
       loginPassword.type="text"
       loginShowPasswordButton.classList.remove("show")
       loginShowPasswordButton.classList.add("hide")
       loginHidePasswordButton.classList.remove("hide")
       loginHidePasswordButton.classList.add("show")
})

loginHidePasswordButton.addEventListener("click",() => {
    loginPassword.type="password"
    loginHidePasswordButton.classList.add("hide")
    loginHidePasswordButton.classList.remove("show")
    loginShowPasswordButton.classList.add("show")
    loginShowPasswordButton.classList.remove("hide")
})

signupShowPasswordButton.addEventListener("click",() => {
    signupPassword.type="text"
    signupShowPasswordButton.classList.remove("show")
    signupShowPasswordButton.classList.add("hide")
    signupHidePasswordButton.classList.remove("hide")
    signupHidePasswordButton.classList.add("show")
})

signupHidePasswordButton.addEventListener("click",() => {
 signupPassword.type="password"
 signupHidePasswordButton.classList.add("hide")
 signupHidePasswordButton.classList.remove("show")
 signupShowPasswordButton.classList.add("show")
 signupShowPasswordButton.classList.remove("hide")
})