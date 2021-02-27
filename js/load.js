"use strict"

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
                portafolio.innerHTML += `<img class="col-lg-4 col-md-4 col-sm-6 pb-3 ps-3 portafolio" 
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
    <div class="modal-dialog modal-dialog-scrollable">
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