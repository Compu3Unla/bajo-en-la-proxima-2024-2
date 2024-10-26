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

