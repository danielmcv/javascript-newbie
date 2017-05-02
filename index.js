// Primero hay que entender que es una Variable.
// ¿Que es una variable?
// Una variable se usa para guardar informacion para poder utilizarla despues en un programa.

// Conocer los tipos de datos es muy importante.
//Data Types / Tipo de datos

// --- NUMBER 
// --- STRING 
// --- ARRAY
// --- OBJECT

//NUMBER 1234567890 cualquier numero y no tiene que estar dentro de ''
//STRING 'hola mi nombre es Daniel' <--- se caracterizan por que estan dentro de comillas ''.
//Se pueden hacre estas operaciones basicas y mas --->  +, -. * , / 

var numero1 = 22;
var numero2 = 18;
	alert(numero1 + numero2 + 4 + 5);
	alert('Hola yo tengo ' + numero1 + ' años');


//Variables pueden contener
	// letras, numeros, guionbajo _ , y simbolo de dinero $
	// debe de empezar con una letra  <---- buna practica.
	// tambien puenen empezar con un _ o con $
	// Son "CASE SENSITIVE" <--- significa que va a respetar las mayusculas y minusculas.


var prueba = 'Estamos probando';
var Prueba = 'Esta es otra prueba';
	alert(prueba);


//Estilos de Variables
	// Camel Case
	var miNumeroFavorito;

	// Partial Case
	var MiNumeroFavorito;

	//Underscore
	var mi_numero_favorito;

//ARRAY son usados para guardar multiples valores en una solo variable.
	//las funciones y metodos son generalmente lo mismo, tambien las propiedades y atributos.
 	// USAR--> .push(), .length, .sort(), .reverse()

	var colores = ['azul', 'verde', 'rojo', 'amrillo'];
		colores.push('blanco');

		alert(colores);


	var numeros = [3,5,6,7,4,3,9,8,6,4,4,'siete']; //<--- tambien puedes agregar STRINGS 'SEVEN'
		alert(numeros[3] + numeros[8]);
		alert(numeros.sort());
		alert(numeros.reverse());
		alert(numeros.length);

//=============================================================================================================
//LOOPS = for, while, for each.

 console.log('HOLA');     // <--- se usa (console.log) para arrojar el resultado e inspeccionar el elemento de tu nabegador.
	for (var edad = 1; edad <= 20; edad++){
		console.log('Daniel tiene '+ edad + ' años');
	}


	var edad = 1;
	while(edad <= 10){
		console.log(edad);
		edad++;
	}


	//los LOOP forEach de usan principalmente para los ARRAYS
	var numeros = [3,5,765,76,2,2,34,457,55,6,34,23];

	numeros.forEach(function(numero){
		console.log(numero);
	});

//=============================================================================================================
// CONDITIONALS / CONDICIONALES 

if (1 == 3) {                         //<--- tambien puedes hacer esto != y te dara falso.
	console.log('esto es verdadero');
};

var num1 = 5;
var num2 = 5;
if(num1 == num2 &&  num1 == 5){       //<--- se usa (&& como and) y (|| como or).
	console.log('Esto es verdadero');
} else{
	console.log('Esto es falso');
};

//=============================================================================================================
//OBJECTS
//Object literal

var persona = {
	nombre:'Oscar',
	apellido: 'Sanchez Garcia',
	edad: 27,
	//tambien podemos agregar ARRAYS
	amigos: ['Fernando', 'Gustavo', 'Angel'],
	//tambien podemos tener un objeto dentro de otro
	direccion:{
		calle: 'Del Valle',
		numero: 164,
		ciudad: 'Guadalajara',
		estado: 'Jalisco',
		pais: 'Mexico',
	},
	// Si queremos ir mas a fondo tambien podemos tener funciones aqui.
	nombreCompleto: function(){
		return this.nombre + ' ' + this.apellido;   //<--- La palabra (this) se usa para referenciar al objeto persona en este caso.
	}
}
console.log(persona.apellido)

//Object constructor

var television = new Object();
television.color = 'negra';
television.shape = 'cuadrada';

television.descripcion = function(){
	return 'Esta television es de color '+ this.color + ' y es '
	+ this.shape;
}
console.log(television.descripcion())


//=============================================================================================================
// EVENTS / EVENTOS

//FOR HTML
function cambiarTexto(){
	var heading = document.getElementById('heading');
	heading.innerHTML = 'HAZ CAMBIADO EL TITULO MUCHAS FELICIDADES! :)';
}