let themeButton = document.getElementById("theme");
let body = document.querySelector("body");
let links = document.querySelectorAll(".links");
let nav = document.querySelectorAll(".nav")
let header = document.querySelector("header");
let fullNav = document.querySelector("nav");

if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme","dark");
}

let lightMode = function() {
    themeButton.innerText = "Dark Theme";
    localStorage.setItem("theme", "light" );
    themeButton.style.backgroundColor = "white";
    themeButton.style.color = "black";
    themeButton.style.border = "1px solid black";
    body.style.backgroundColor = "white";
    body.style.color = "black";
    header.style.backgroundColor ="white";
    fullNav.style.backgroundColor ="white";

    for(let i = 0; i  < links.length; i++){
            
        links[i].style.color = "black";
        links[i].style.backgroundColor ="white";
        links[i].style.border  = "1px solid black";  
    }

    for(let i = 0; i < nav.length; i++){
        
        nav[i].style.color = "black";
        nav[i].style.backgroundColor = "white";
    }
};

let darkMode = function() {
    themeButton.innerText = "Light Theme";
    localStorage.setItem("theme", "dark" );
    themeButton.style.backgroundColor = "black";
    themeButton.style.color = "white";
    themeButton.style.border = "1px solid white";
    body.style.backgroundColor = "black";
    body.style.color ="white";
    header.style.backgroundColor ="black";
    fullNav.style.backgroundColor ="black";

    for(let i = 0; i  < links.length; i++) {

        links[i].style.color = "white";
        links[i].style.backgroundColor ="black";
        links[i].style.border  = "1px solid white";
    }

    for(let i = 0; i < nav.length; i++){
        
        nav[i].style.color = "white";
        nav[i].style.backgroundColor = "black";
    }  
    
};

let loadTheme = function() {
    console.log(localStorage.getItem("theme"));
    if (localStorage.getItem("theme") === "light"){
        lightMode();
    }
    else if (localStorage.getItem("theme") === "dark"){
        console.log("load light");
        darkMode();
    }
};

let changeTheme = function() {
    if (themeButton.innerText === "Dark Theme"){
        darkMode();
    }
    else if(themeButton.innerText === "Light Theme"){
        lightMode();
    }
};

window.onload = loadTheme;
themeButton.onclick = changeTheme;
for(let i = 0; i < nav.length; i++){
    nav.onclick = loadTheme;
}