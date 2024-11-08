// mapas pages
function showImage(imageNumber) {
  const images = document.querySelectorAll('.gallery-image');
  images.forEach(image => image.style.display = 'none');
  document.getElementById(`image${imageNumber}`).style.display = 'block';
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

