
var pages = null;
var currentPage = "page1";

loadPages = function() {
    pages = {
        page1: document.getElementById("Page-1"),
        page2: document.getElementById("Page-2"),
        page3: document.getElementById("Page-3"),
        page4: document.getElementById("Page-4")
    }
}
  /* Eventos de una app en Phonegap
    ---------------------------------
    deviceready
    pause
    resume
    backbutton
    menubutton
    searchbutton
    startcallbutton
    endcallbutton
    volumedownbutton
    volumeupbutton
    
    */
document.addEventListener('DOMContentLoaded', function(){
    loadPages();
    FastClick.attach(document.body);
}, false);

var menuIsOpen = false;
//función click en menú
function menuButtonClick(){
    if(menuIsOpen) {
        pages[currentPage].className = "body transition center";
        menuIsOpen = false;
    } else {
        pages[currentPage].className = "body transition right";
        menuIsOpen = true;
    }
}

// función cambiar página
function changePage(pageSelected) {
    pages[currentPage].className = "hide";
    
    pages[pageSelected].className = "body right";
    setTimeout(function() {
        pages [pageSelected].className = "body visible transition center";
        currentPage = pageSelected;
        menuIsOpen = false;
    }, 0);
}