function calcularObraGris() {
    var cubierto = parseFloat(document.getElementById("cubiertoObraGris").value) || 0;
    var pergola = parseFloat(document.getElementById("pergolaObraGris").value) || 0;
    var galeria = parseFloat(document.getElementById("galeriaObraGris").value) || 0;

    var resultado = (cubierto * 220 + pergola * 143 + galeria * 167.2) * 1100 + 800000;

    mostrarResultado(resultado);
  }

  function calcularEnDolaresObraGris() {
    var cubierto = parseFloat(document.getElementById("cubiertoObraGris").value) || 0;
    var pergola = parseFloat(document.getElementById("pergolaObraGris").value) || 0;
    var galeria = parseFloat(document.getElementById("galeriaObraGris").value) || 0;

    var resultado = (cubierto * 220 + pergola * 143 + galeria * 167.2) + 730;

    mostrarResultado(resultado);
  }

  function calcularPremiumBase() {
    var cubierto = parseFloat(document.getElementById("cubiertoPremiumBase").value) || 0;
    var pergola = parseFloat(document.getElementById("pergolaPremiumBase").value) || 0;
    var galeria = parseFloat(document.getElementById("galeriaPremiumBase").value) || 0;

    var resultado = (cubierto * 315 + pergola * 143 + galeria * 167) * 1100 + 800000;

    mostrarResultado(resultado);
  }

  function calcularEnDolaresPremiumBase() {
    var cubierto = parseFloat(document.getElementById("cubiertoPremiumBase").value) || 0;
    var pergola = parseFloat(document.getElementById("pergolaPremiumBase").value) || 0;
    var galeria = parseFloat(document.getElementById("galeriaPremiumBase").value) || 0;

    var resultado = (cubierto * 315 + pergola * 143 + galeria * 167) + 730;

    mostrarResultado(resultado);
  }

  function calcularPremiumLlaveEnMano() {
    var cubierto = parseFloat(document.getElementById("cubiertoPremiumLlaveEnMano").value) || 0;
    var pergola = parseFloat(document.getElementById("pergolaPremiumLlaveEnMano").value) || 0;
    var galeria = parseFloat(document.getElementById("galeriaPremiumLlaveEnMano").value) || 0;

    var resultado = (cubierto * 605 + pergola * 275 + galeria * 363) * 1100 + 800000;

    mostrarResultado(resultado);
  }

  function calcularEnDolaresPremiumLlaveEnMano() {
    var cubierto = parseFloat(document.getElementById("cubiertoPremiumLlaveEnMano").value) || 0;
    var pergola = parseFloat(document.getElementById("pergolaPremiumLlaveEnMano").value) || 0;
    var galeria = parseFloat(document.getElementById("galeriaPremiumLlaveEnMano").value) || 0;

    var resultado = (cubierto * 605 + pergola * 275 + galeria * 363) + 730;

    mostrarResultado(resultado);
  }

  function calcularObraGrisLlaveEnMano() {
    var cubierto = parseFloat(document.getElementById("cubiertoObraGrisLlaveEnMano").value) || 0;
    var pergola = parseFloat(document.getElementById("pergolaObraGrisLlaveEnMano").value) || 0;
    var galeria = parseFloat(document.getElementById("galeriaObraGrisLlaveEnMano").value) || 0;
  
    var resultado = (cubierto * 484 + pergola * 275 + galeria * 363) * 1100 + 800000;
  
    mostrarResultado(resultado);
  }
  
  function calcularEnDolaresObraGrisLlaveEnMano() {
    var cubierto = parseFloat(document.getElementById("cubiertoObraGrisLlaveEnMano").value) || 0;
    var pergola = parseFloat(document.getElementById("pergolaObraGrisLlaveEnMano").value) || 0;
    var galeria = parseFloat(document.getElementById("galeriaObraGrisLlaveEnMano").value) || 0;
  
    var resultado = (cubierto * 484 + pergola * 275 + galeria * 363) + 730;
  
    mostrarResultado(resultado);
  }
  
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