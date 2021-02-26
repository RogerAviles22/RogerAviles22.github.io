"use strict"

function loadFile() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "portafolio.json", true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let datos = JSON.parse(this.responseText);
        let portafolio = document.getElementById("portafolio");
        portafolio.innerHTML = '';

        for(let item of datos){
            portafolio.innerHTML += `<img class="col-lg-4 col-md-4 col-sm-6" src="images/projects/${item.imagen}" alt="${item.imagen}">`
        }
      }
    };
}

loadFile();