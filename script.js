
//initialize items on DOM that will be changed//
let themeButton = document.getElementById("theme");
let body = document.querySelector("body");
let links = document.querySelectorAll(".links");
let nav = document.querySelectorAll(".nav")
let header = document.querySelector("header");
let fullNav = document.querySelector("nav");


//create a reusable function to change theme//
let changeTheme = function() {
    if (themeButton.innerText === "Dark Theme") {

        //set styles of the DOM elements for changing to dark theme//
        themeButton.innerText = "Light Theme";
        themeButton.style.backgroundColor = "black";
        themeButton.style.color = "white";
        themeButton.style.border = "1px solid white";
        body.style.backgroundColor = "black";
        body.style.color ="white";
        header.style.backgroundColor ="black"
        fullNav.style.backgroundColor ="black"

        //set values of the DOM elements so that they do not revert to original when page is changed or refreshed//
        localStorage.setItem("Theme Text","Light Theme");
        localStorage.setItem("Theme Background","black");
        localStorage.setItem("Theme Color","white");
        localStorage.setItem("theme border","1px solid white");
        localStorage.setItem("body background","black");
        localStorage.setItem("body color", "white");
        localStorage.setItem("header background", "black");
        localStorage.setItem("full nav background", "black");

        for(let i = 0; i  < links.length; i++) {

            links[i].style.color = "white";
            links[i].style.backgroundColor ="black";
            links[i].style.border  = "1px solid white";

            localStorage.setItem("links i background","black");
            localStorage.setItem("links i color","white");
            localStorage.setItem("links i border", "1px solid white");
        }

        for(let i = 0; i < nav.length; i++){
            
            nav[i].style.color = "white";
            nav[i].style.backgroundColor = "black";

            localStorage.setItem("nav i color", "white");
            localStorage.setItem("nav i background", "black");
        }  
    }

    else if(themeButton.innerText = "Light Theme") {

        //set styles of the DOM elements for changing to light theme//
        themeButton.innerText = "Dark Theme";
        themeButton.style.backgroundColor = "white";
        themeButton.style.color = "black";
        themeButton.style.border = "1px solid black";
        body.style.backgroundColor = "white";
        body.style.color = "black";
        header.style.backgroundColor ="white"
        fullNav.style.backgroundColor ="white"

       //set values of the DOM elements so that they do not revert to original when page is changed or refreshed//
        localStorage.setItem("Theme Text","Dark Theme");
        localStorage.setItem("Theme Background","white");
        localStorage.setItem("Theme Color","black");
        localStorage.setItem("theme border","1px solid black");
        localStorage.setItem("body background","white");
        localStorage.setItem("body color", "black");
        localStorage.setItem("header background", "white");
        localStorage.setItem("full nav background", "white");

        for(let i = 0; i  < links.length; i++){
            
            links[i].style.color = "black";
            links[i].style.backgroundColor ="white";
            links[i].style.border  = "1px solid black";  

            localStorage.setItem("links i color","black");
            localStorage.setItem("links i background","white");
            localStorage.setItem("links i border", "1px solid black");
        }

        for(let i = 0; i < nav.length; i++){
            
            nav[i].style.color = "black";
            nav[i].style.backgroundColor = "white";

            localStorage.setItem("nav i color", "black");
            localStorage.setItem("nav i background", "white");
        }
    }
};

//create a function to get the saved items//
let loadTheme = function() {
    //set the DOM elements to the previously set syles//
    themeButton.innerText = localStorage.getItem("Theme Text");
    themeButton.style.backgroundColor = localStorage.getItem("Theme Background")
    themeButton.style.color = localStorage.getItem("Theme Color");
    themeButton.style.border = localStorage.getItem("theme border");
    body.style.backgroundColor = localStorage.getItem("body background");
    body.style.color = localStorage.getItem("body color");
    header.style.backgroundColor = localStorage.getItem("header background");
    fullNav.style.backgroundColor = localStorage.getItem("full nav background");

    for(let i = 0; i  < links.length; i++){
        links[i].style.color = localStorage.getItem("links i color");
        links[i].style.backgroundColor = localStorage.getItem("links i background");
        links[i].style.border  = localStorage.getItem("links i border");
    }

    for(let i = 0; i < nav.length; i++){
        nav[i].style.color = localStorage.getItem("nav i color"); 
        nav[i].style.backgroundColor = localStorage.getItem("nav i background");
    }

};

window.onload = loadTheme;
themeButton.onclick = changeTheme;
