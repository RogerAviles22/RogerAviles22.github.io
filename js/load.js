"use strict"

function loadFileAbilities() {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "datos/habilidad.json", true);
  xhttp.send();
  xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
          let datos = JSON.parse(this.responseText);
          let portafolio = document.getElementById("habilidad");
          portafolio.innerHTML = '';
          for (let item of datos) {
              portafolio.innerHTML += `<div class="contenedor col-xxl-1 col-lg-2 col-md-3 col-sm-4 col-4 text-center">
              <img class="img-habilidad img-fluid" 
              src="images/logo/${item.img}" 
              alt="${item.img}"> 
              <div class="overlay">${item.txt}</div>
            </div>  `
          }
      }
  };
}

function loadFile() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "portafolio.json", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let datos = JSON.parse(this.responseText);
            let portafolio = document.getElementById("portafolio");
            portafolio.innerHTML = '';

            for (let item of datos) {
                portafolio.innerHTML += `<img class="col-xxl-2 col-lg-4 col-md-4 col-sm-6 pb-3 ps-3 portafolio" 
                data-bs-toggle="modal" data-bs-target="#${item.id}"
                src="images/projects/${item.imagen}" 
                alt="${item.imagen}">`
                portafolio.innerHTML += modal_project(item);
            }
        }
    };
}

function modal_project(item) {
    return `<div class="modal fade" id="${item.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" >${item.titulo}</h5>
          <i class="bi bi-x" data-bs-dismiss="modal" aria-label="Close"></i>
          </div>
        <div class="modal-body">
          <img class="img-fluid" src="images/projects/${item.imagen}" alt="${item.imagen}"> 
          <p class="modal-realizado text-center fst-italic ">${item.realizado}</p> 
          <p class="text-start">${item.caracteristicas}</p> 
          <p class="modal-lenguaje text-start ">Lenguajes usados: ${item.lenguajes}</p> 
        </div>
        <div class="modal-footer d-flex justify-content-between">` +
        validar_repositorio(item.repositorio) +
        `<button type="button" class="btn btn-light" data-bs-dismiss="modal">Cerrar</button>
        </div>
      </div>
    </div>
  </div>`
}


function validar_repositorio(repositorio) {
    if (repositorio.includes("https"))
        return `<a href="${repositorio}" target="_blank">Repositorio</a>`
    return `<p>${repositorio}</p>`
}

loadFile();
loadFileAbilities();

// Activado cuando hacemos scroll
window.onscroll = function() {sticky_function()};

// Obtenemos navbar
var navbar = document.getElementById("navbar");

//  Obtener la posición de desplazamiento de la barra de navegación
var sticky = navbar.offsetTop;

// Agregue la clase adhesiva a la barra de navegación cuando llegue a su posición de desplazamiento. Quitar "pegajoso" cuando salga de la posición de desplazamiento
function sticky_function() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}