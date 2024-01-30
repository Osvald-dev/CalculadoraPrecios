// const dolar = 1200
const flete = 800000
//OBRA GRIS
function calcularObraGris() {
    var cubierto = parseFloat(document.getElementById("cubiertoObraGris").value) || 0;
    var pergola = parseFloat(document.getElementById("pergolaObraGris").value) || 0;
    var galeria = parseFloat(document.getElementById("galeriaObraGris").value) || 0;

    var resultado = (cubierto * 220000 + pergola * 143000 + galeria * 150000) + flete;

    mostrarResultado(resultado);
  }
  function calcularObraGrisLlaveEnMano() {
    var cubierto = parseFloat(document.getElementById("cubiertoObraGrisLlaveEnMano").value) || 0;
    var pergola = parseFloat(document.getElementById("pergolaObraGrisLlaveEnMano").value) || 0;
    var galeria = parseFloat(document.getElementById("galeriaObraGrisLlaveEnMano").value) || 0;
  
    var resultado = (cubierto * 380000 + pergola * 275000 + galeria * 280000) + flete;
  
    mostrarResultado(resultado);
  }
  

  // function calcularEnDolaresObraGris() {
  //   var cubierto = parseFloat(document.getElementById("cubiertoObraGris").value) || 0;
  //   var pergola = parseFloat(document.getElementById("pergolaObraGris").value) || 0;
  //   var galeria = parseFloat(document.getElementById("galeriaObraGris").value) || 0;

  //   var resultado = (cubierto * 220 + pergola * 143 + galeria * 167.2) + 750;

  //   mostrarResultado(resultado);
  // }
  // function calcularEnDolaresObraGrisLlaveEnMano() {
  //   var cubierto = parseFloat(document.getElementById("cubiertoObraGrisLlaveEnMano").value) || 0;
  //   var pergola = parseFloat(document.getElementById("pergolaObraGrisLlaveEnMano").value) || 0;
  //   var galeria = parseFloat(document.getElementById("galeriaObraGrisLlaveEnMano").value) || 0;
  
  //   var resultado = (cubierto * 484 + pergola * 275 + galeria * 363) + 750;
  
  //   mostrarResultado(resultado);
  // }
//PREMIUM
  function calcularPremiumBase() {
    var cubierto = parseFloat(document.getElementById("cubiertoPremiumBase").value) || 0;
    var pergola = parseFloat(document.getElementById("pergolaPremiumBase").value) || 0;
    var galeria = parseFloat(document.getElementById("galeriaPremiumBase").value) || 0;

    var resultado = (cubierto * 270000 + pergola * 143000 + galeria * 170000) + flete;

    mostrarResultado(resultado);
  }

  // function calcularEnDolaresPremiumBase() {
  //   var cubierto = parseFloat(document.getElementById("cubiertoPremiumBase").value) || 0;
  //   var pergola = parseFloat(document.getElementById("pergolaPremiumBase").value) || 0;
  //   var galeria = parseFloat(document.getElementById("galeriaPremiumBase").value) || 0;

  //   var resultado = (cubierto * 315 + pergola * 143 + galeria * 167.2) + 750;

  //   mostrarResultado(resultado);
  // }

  function calcularPremiumLlaveEnMano() {
    var cubierto = parseFloat(document.getElementById("cubiertoPremiumLlaveEnMano").value) || 0;
    var pergola = parseFloat(document.getElementById("pergolaPremiumLlaveEnMano").value) || 0;
    var galeria = parseFloat(document.getElementById("galeriaPremiumLlaveEnMano").value) || 0;

    var resultado = (cubierto * 450000 + pergola * 275 + galeria * 300000) + flete;

    mostrarResultado(resultado);
  }

  // function calcularEnDolaresPremiumLlaveEnMano() {
  //   var cubierto = parseFloat(document.getElementById("cubiertoPremiumLlaveEnMano").value) || 0;
  //   var pergola = parseFloat(document.getElementById("pergolaPremiumLlaveEnMano").value) || 0;
  //   var galeria = parseFloat(document.getElementById("galeriaPremiumLlaveEnMano").value) || 0;

  //   var resultado = (cubierto * 605 + pergola * 275 + galeria * 363) + 750;

  //   mostrarResultado(resultado);
  // }



  //DUPLEX
  function calcularDuplex() {
    var cubierto = parseFloat(document.getElementById("cubiertoDuplex").value) || 0;
    var pergola = parseFloat(document.getElementById("pergolaDuplex").value) || 0;
    var galeria = parseFloat(document.getElementById("galeriaDuplex").value) || 0;

    var resultado = (cubierto * 400000 + pergola * 143000 + galeria * 167000) + flete;

    mostrarResultado(resultado);
  }
  function calcularDuplexLlaveEnMano() {
    var cubierto = parseFloat(document.getElementById("cubiertoDuplexLlaveEnMano").value) || 0;
    var pergola = parseFloat(document.getElementById("pergolaDuplexLlaveEnMano").value) || 0;
    var galeria = parseFloat(document.getElementById("galeriaDuplexLlaveEnMano").value) || 0;

    var resultado = (cubierto * 854000 + pergola * 275000 + galeria * 363000) + flete;

    mostrarResultado(resultado);
  }

  // function calcularEnDolaresDuplexLlaveEnMano() {
  //   var cubierto = parseFloat(document.getElementById("cubiertoDuplexLlaveEnMano").value) || 0;
  //   var pergola = parseFloat(document.getElementById("pergolaDuplexLlaveEnMano").value) || 0;
  //   var galeria = parseFloat(document.getElementById("galeriaDuplexLlaveEnMano").value) || 0;

  //   var resultado = (cubierto * 854 + pergola * 275 + galeria * 363) + 750;

  //   mostrarResultado(resultado);
  // }
  // function calcularEnDolaresDuplex() {
  //   var cubierto = parseFloat(document.getElementById("cubiertoDuplex").value) || 0;
  //   var pergola = parseFloat(document.getElementById("pergolaDuplex").value) || 0;
  //   var galeria = parseFloat(document.getElementById("galeriaDuplex").value) || 0;

  //   var resultado = (cubierto * 400 + pergola * 143 + galeria * 167.2) + 750;

  //   mostrarResultado(resultado);
  // }
  //RESULTADO

  function mostrarResultado(resultado) {
    var popup = document.getElementById("popup");
    var popupContent = document.getElementById("popupContent");
  
    // Formatear resultado con puntos como separadores de miles
    var resultadoFormateado = resultado.toLocaleString('es-ES');
  
    // Mostrar resultado formateado en el popup
    popupContent.innerHTML = "Resultado: $" + resultadoFormateado;
  
    // Mostrar el popup
    popup.classList.add("show");
  }
  
  function cerrarPopup() {
    var popup = document.getElementById("popup");
  
    // Ocultar el popup
    popup.classList.remove("show");
  }

  function borrarCampos(contenedorId) {
    // Obtener el contenedor específico
    var contenedor = document.getElementById(contenedorId);
  
    // Recorrer todos los elementos dentro del contenedor y borrar los campos de entrada
    var camposEntrada = contenedor.querySelectorAll('input[type="number"]');
    camposEntrada.forEach(function (campo) {
      campo.value = "";
    });
  
    // Ocultar el resultado y el popup
    document.getElementById("resultado").innerHTML = "";
    var popup = document.getElementById("popup");
    popup.classList.remove("show");
  }