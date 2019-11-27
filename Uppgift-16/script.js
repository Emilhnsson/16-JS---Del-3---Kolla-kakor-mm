var cookies = document.querySelector(".cookies");
var language = document.querySelector(".language");
var java = document.querySelector(".java");

if(navigator.cookieEnabled) {
    cookies.innerHTML = " enabled!";
} else {
    cookies.innerHTML = " is not enabled!";
}


if(navigator.language == "sv-SE") {
    language.innerHTML = " currently using Svenska";
} else {
    language.innerHTML = " not using Svenska";
}

if(navigator.javaEnabled()) {
    java.innerHTML = "enabled!";
} else {
    java.innerHTML = "disabled!";
}
