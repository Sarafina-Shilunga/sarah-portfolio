console.log("Sarah's portfolio is working!")
const magic =document.getElementById("magic")
magic.addEventListener("click", function(){
    if (magic.textContent === "Wanna see magic?") {
        magic.textContent ="Magic!";
    } else {
        magic.textContent = "Wanna see magic?";
    }
});


const menuButton = document.getElementById("menu-button");
const navLinks = document.querySelector(".nav-links");
menuButton.addEventListener("click", function(){
    navLinks.classList.toggle("show");
});

const themeButton =document.getElementById("theme-button");
themeButton.addEventListener("click", function(){
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        themeButton.textContent="🌸";
    } else{
        themeButton.textContent="🌙";
    }
});