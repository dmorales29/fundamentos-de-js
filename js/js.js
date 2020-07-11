var nombre = "David",
  apellido = "Morales";

var nombreEnMayuscula = nombre.toUpperCase();
var apellidoEnMinuscula = apellido.toLowerCase();

//chartAt(n) nos indica el caracter "n"
var primerLetra = apellido.charAt(5);

//Interpolación de variables
var nombreCompleto = `${nombre} ${apellido.charAt(5)}`;

//substr(x,y) nos permite escoger substrings (caracteres) de x a y
var str = nombre.substr(3, 5);

var ultimaLetraDeNombre = console.log(nombre.charAt(nombre.length - 1));
