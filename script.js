// index
const videoImage = document.getElementById("video");


const staticImage = "img/bannerindex.jpg";
const gifImage = "img/bannerindexvideo2.gif"; 


videoImage.addEventListener("mouseover", function() {
    videoImage.src = gifImage; 
});


videoImage.addEventListener("mouseout", function() {
    videoImage.src = staticImage; 
});

// nav mobile
function nav() {
    document.getElementById("navabierto").classList.toggle("mostrarnav");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.botonnav')) {
      var dropdowns = document.getElementsByClassName("listanav");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('mostrarnav')) {
          openDropdown.classList.remove('mostrarnav');
        }
      }
    }
  }

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