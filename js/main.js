function dropHTML() {
    $("#html-dropdown").slideToggle("fast");
    $("#1").toggleClass("fa-sort-up fa-sort-down");
}
function dropCSS() {
    $("#css-dropdown").slideToggle("fast");
    $("#2").toggleClass("fa-sort-up fa-sort-down");
}
function dropHTML5() {
    $("#html5-dropdown").slideToggle("fast");
    $("#3").toggleClass("fa-sort-up fa-sort-down");
}
function dropDOCS() {
    $("#docs-dropdown").slideToggle("fast");
    $("#4").toggleClass("fa-sort-up fa-sort-down");
}
function dropMEDIA() {
    $("#media-dropdown").slideToggle("fast");
    $("#5").toggleClass("fa-sort-up fa-sort-down");
}
function dropLINKS() {
    $("#links-dropdown").slideToggle("fast");
    $("#6").toggleClass("fa-sort-up fa-sort-down");
}

function themeSelect() {
    var x = document.getElementById("theme-change");
    if (x.style.display === "grid") {
      x.style.display = "none";
    } else {
      x.style.display = "grid";
    }
}

function themeBlue() {
    document.getElementById('theme').href = 'css/blue.css';
}
function themeGreen() {
    document.getElementById('theme').href = 'css/green.css';
}
function themeRed() {
    document.getElementById('theme').href = 'css/red.css';
}
function themeYellow() {
    document.getElementById('theme').href = 'css/yellow.css';
}