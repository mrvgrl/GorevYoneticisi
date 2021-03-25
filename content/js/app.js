const img = document.getElementById("spinner");

eventListeners();

function eventListeners() {//Tüm event Listenerler
    console.log("sssss");
    img.addEventListener("load", loading());

}

function loading() {
    console.log("teset");
    setTimeout(function () {
        img.setAttribute("style", "display:none !important");
    }, 3000);
    
}

