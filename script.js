// mapas pages
var myImage=document.querySelector("#img-id");

function linea33()
{
  myImage.src="img/mapa-33.png";
}

function linea37()
{
  myImage.src="img/mapa-37.png";
}

function linea60()
{
  myImage.src="img/mapa-60.png";
}

function linea79()
{
  myImage.src="img/mapa-79.png";
}

function linea160()
{
  myImage.src="img/mapa-160.png";
}

// index
const staticImage = document.getElementById("staticimage");
const hoverVideo = document.getElementById("alvideo");

staticImage.addEventListener("mouseover", function() {
    staticImage.style.display = "none";  
    hoverVideo.style.display = "block";  
    hoverVideo.play();                  
});

hoverVideo.addEventListener("mouseout", function() {
    hoverVideo.pause();                  
    hoverVideo.style.display = "none";   
    staticImage.style.display = "block"; 
});

//galeria
function dropdown() {
  document.getElementById("cincuentas").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content, flechita-galeria");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
  
function dropdown2() {
  document.getElementById("sesentas").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content, flechita-galeria");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
  
function dropdown3() {
  document.getElementById("setentas").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content, flechita-galeria");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
  
function dropdown4() {
  document.getElementById("ochentas").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content, flechita-galeria");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
    
var element = document.querySelector(".flechita-galeria");
  
element.addEventListener("click", function () {  
  element.classList.toggle("back");
});

