/*let nombres = "Isaac Diaz Huertas";
const edad = 20;
//console.log("Hola, soy " + nombre + " y tengo " + " " + edad + " años.")//

//Desafio 2
/*Crear una funcion llamada presentarme, dentro crear una variable y asignarle
su nombre, crear funcion constante y asignarle su edad, luego imprimir en consola:
Hola, soy ____ y tengo ___ años.*/

function miFuncion() {
  console.log("pepita perez");
}

miFuncion();

function presentarme() {
  let nombre = "Isaac";
  const edad = 20;
  console.log("Hola, soy " + nombre + " y tengo " + edad + " años.");
}
presentarme();

//miFuncion();

function miFuncion1(nombre) {
  console.log(nombre);
}

miFuncion1("Pepita perez");
miFuncion1("Pepito perez");
miFuncion1("Juan");
miFuncion1("Manu");

/*3.  Crear una funcion que reciba un nombre y edad por parárametros, luego imprimir 
en consola: Hola, soy ___ y tengo ___ años.*/
function presentacion(nombre, edad) {
  console.log("Hola, soy " + nombre + " y tengo " + edad + " años.");
}
presentacion("Juan", 25);

/*4.  Crear una funcion que reciba un nombre, un apellido y una edad por parametros,
    la funcion debe imprimir en consola: Su nombre es _____ y usted tiene ____ años,
    si no se recibe la edad imprimir: Su nombre es ______ y usted tiene 100 años.*/

function desafio4(nombre, apellido, edad = 100) {
  console.log(
    "Su nombre es " +
      nombre +
      " " +
      apellido +
      " y usted tiene " +
      edad +
      " años."
  );
}
desafio4("Isaac", "Diaz", 20);
desafio4("Isaac", "Diaz");
