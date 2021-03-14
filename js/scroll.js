// Activado cuando hacemos scroll
window.onscroll = function() {sticky_function(), add_class()};

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

function add_class(){
  if(document.documentElement.scrollTop > 350){
    document.querySelector('.go-top-container')
    .classList.add('mostrar');
  }else{
    document.querySelector('.go-top-container')
    .classList.remove('mostrar');
  }
}
  
document.querySelector('.go-top-container')
  .addEventListener('click', ()=>{
    window.scrollTo({
      top:0,
      behavior: 'smooth'
    })
  });

