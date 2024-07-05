// Funciones de cálculo para cada tipo
function calcularObraGris() {
  var cubierto = parseFloat(document.getElementById("cubiertoObraGris").value) || 0;
  var pergola = parseFloat(document.getElementById("pergolaObraGris").value) || 0;
  var galeria = parseFloat(document.getElementById("galeriaObraGris").value) || 0;

  var resultado = cubierto * 254100 + pergola * 100000 + galeria * 184800;

  mostrarResultado(resultado);
}

function calcularObraGrisLlaveEnMano() {
  var cubierto = parseFloat(document.getElementById("cubiertoObraGrisLlaveEnMano").value) || 0;
  var pergola = parseFloat(document.getElementById("pergolaObraGrisLlaveEnMano").value) || 0;
  var galeria = parseFloat(document.getElementById("galeriaObraGrisLlaveEnMano").value) || 0;

  var resultado = cubierto * 429000 + pergola * 181500 + galeria * 300300;

  mostrarResultado(resultado);
}

function calcularPremiumBase() {
  var cubierto = parseFloat(document.getElementById("cubiertoPremiumBase").value) || 0;
  var pergola = parseFloat(document.getElementById("pergolaPremiumBase").value) || 0;
  var galeria = parseFloat(document.getElementById("galeriaPremiumBase").value) || 0;

  var resultado = cubierto * 308000 + pergola * 100000 + galeria * 184800;

  mostrarResultado(resultado);
}

function calcularPremiumLlaveEnMano() {
  var cubierto = parseFloat(document.getElementById("cubiertoPremiumLlaveEnMano").value) || 0;
  var pergola = parseFloat(document.getElementById("pergolaPremiumLlaveEnMano").value) || 0;
  var galeria = parseFloat(document.getElementById("galeriaPremiumLlaveEnMano").value) || 0;

  var resultado = cubierto * 506000 + pergola * 181500 + galeria * 300300;

  mostrarResultado(resultado);
}

function calcularDuplex() {
  var cubierto = parseFloat(document.getElementById("cubiertoDuplex").value) || 0;
  var pergola = parseFloat(document.getElementById("pergolaDuplex").value) || 0;
  var galeria = parseFloat(document.getElementById("galeriaDuplex").value) || 0;

  var resultado = cubierto * 308000 + pergola * 100000 + galeria * 184800;

  mostrarResultado(resultado);
}

function calcularDuplexLlaveEnMano() {
  var cubierto = parseFloat(document.getElementById("cubiertoDuplexLlaveEnMano").value) || 0;
  var pergola = parseFloat(document.getElementById("pergolaDuplexLlaveEnMano").value) || 0;
  var galeria = parseFloat(document.getElementById("galeriaDuplexLlaveEnMano").value) || 0;

  var resultado = cubierto * 550000 + pergola * 181500 + galeria * 300300;

  mostrarResultado(resultado);
}

// Función para calcular con ECAP
function calcularConECAP(tipo) {
  var cubierto = parseFloat(document.getElementById("cubierto" + tipo).value) || 0;
  var pergola = parseFloat(document.getElementById("pergola" + tipo).value) || 0;
  var galeria = parseFloat(document.getElementById("galeria" + tipo).value) || 0;

  var precioCubierto;
  var precioPergola;
  var precioGaleria;

  // Asignación de precios por tipo de construcción
  switch(tipo) {
      case 'ObraGris':
          precioCubierto = cubierto * 254100;
          precioPergola = pergola * 100000;
          precioGaleria = galeria * 184800;
          break;
      case 'ObraGrisLlaveEnMano':
          precioCubierto = cubierto * 429000;
          precioPergola = pergola * 181500;
          precioGaleria = galeria * 300300;
          break;
      case 'PremiumBase':
          precioCubierto = cubierto * 308000;
          precioPergola = pergola * 100000;
          precioGaleria = galeria * 184800;
          break;
      case 'PremiumLlaveEnMano':
          precioCubierto = cubierto * 506000;
          precioPergola = pergola * 181500;
          precioGaleria = galeria * 300300;
          break;
      case 'Duplex':
          precioCubierto = cubierto * 308000;
          precioPergola = pergola * 100000;
          precioGaleria = galeria * 184800;
          break;
      case 'DuplexLlaveEnMano':
          precioCubierto = cubierto * 550000;
          precioPergola = pergola * 181500;
          precioGaleria = galeria * 300300;
          break;
      default:
          precioCubierto = 0;
          precioPergola = 0;
          precioGaleria = 0;
  }

  // Cálculo del ECAP adicional
  var sumaECAP = cubierto * 50000; // ECAP solo se aplica a los metros cubiertos

  // Cálculo total con ECAP
  var resultado = precioCubierto + precioPergola + precioGaleria + sumaECAP;

  // Mostrar el resultado
  mostrarResultado(resultado);
}

// Función para mostrar el resultado en el popup
function mostrarResultado(resultado) {
  var popup = document.getElementById("popup");
  var popupContent = document.getElementById("popupContent");

  var resultadoFormateado = resultado.toLocaleString('es-ES');

  popupContent.innerHTML = "Resultado: $" + resultadoFormateado;

  popup.classList.add("show");
}

// Función para cerrar el popup
function cerrarPopup() {
  var popup = document.getElementById("popup");

  popup.classList.remove("show");
}

// Función para borrar los campos de entrada
function borrarCampos(contenedorId) {
  var contenedor = document.getElementById(contenedorId);

  var camposEntrada = contenedor.querySelectorAll('input[type="number"]');
  camposEntrada.forEach(function (campo) {
      campo.value = "";
  });

  document.getElementById("resultado").innerHTML = "";
  var popup = document.getElementById("popup");
  popup.classList.remove("show");
}
