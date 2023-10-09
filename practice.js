// Aquí se está definiendo una constante y le estoy colocando como valor un string. Flower es el nombre de la constante. 
const flower = "orchid"

// Aquí se está definiendo una variable y se le está colocando como valor un número que es 6. El nombre de esa variable es sol
var sol = 6
let sol2 = sol

// Aquí se está definiendo una constante que se llama zoo y se le está colocando como valor un arreglo cuyos "elementos" son strings.
const zoo = ["elefant", "monkey", "giraffe", "whale"]

// Para obtener el valor de un elemento de un arreglo se escribe el nombre del arreglo seguido de corchetes y el índice del elemento que queremos seleccionar. 

// Aquí se está definiendo una variable llamada animal cuyo valor es el elemento con índice 3 del arreglo zoo.
let animal = zoo[3]

// Aquí se está definiendo una variable llamada house cuyo valor es un objeto. El objeto se escribe entre llaves y tiene pares de propiedad y valor.
let house = {
    address: "Hauptstr. 12",
    zipcode: 28612,
    color: "lilac",
    city: "Berlin"
    // fulladdre
}

// Para acceder a la propiedad de un objeto se escribe el nombre con que se define el objeto seguido de . y el nombre de la propiedad.
let myAddress = house.address
let myHouseColor = house.color

// Para acceder a la propiedad de un objeto también se puede escribir el nombre con que se define el objeto seguido de corchetes y se escribe el nombre de la propiedad como string.
let myCity = house["city"]


// Para DEFINIR una función se coloca la palabra reservada "function" seguido de espacio y luego el nombre de la función seguido de paréntesis. En los paréntesis se escriben los "parámetros" de la función si los tuviese. Después de los paréntesis se deja un espacio y luego se escriben las llaves {} dejando una línea de por medio entre cada una. Dentro de las llaves se escribe el cuerpo, que es el bloque de código de la función que se quiere llamar/reusar.
function saludo() {
    console.log("hola mundo!")
}

// Para LLAMAR una función se escribe el nombre de la función y los valores de los ARGUMENTOS entre paréntesis.
saludo()

// Aquí se está definiendo una variable cuyo nombre es colorFavorito y cuyo valor es una función. Esta función tiene varias diferencias con la anterior: 1. no tiene nombre sino que es anónima, 2. tiene un parámetro**, 3. Se está pasando como valor a una variable.

// * El parámetros es una variable local, es decir, pertenece al alcance del bloque de código de la función. Se le llama parámetro cuando se está definiendo la función.

let colorFavorito = function (color) {
    console.log("Mi color favorito es: " + color)
}

// Cuando se llama a la función, la lista de valores de los parámetros se llaman ARGUMENTOS.
colorFavorito("rosado")

// Aquí se está definiendo una variable cuyo nombre es colorFavorito2 y asignándole la función colorFavorito como un valor.
let colorFavorito2 = colorFavorito

// Aquí se está definiendo una variable cuyo nombre es suma y asignándole como valor una "ARROW FUNCTION".
// Esta Arrow Function tiene dos parámetros. La función retorna la suma de los parámetros.
let suma = (num1, num2) => {
    return num1 + num2
}

// Aquí se está definiendo una variable llamada resultado cuyo valor es lo que retorna la llamada de la función suma con los valores 10, 10 como argumentos.
let resultado = suma(10, 10)


let auto = {
    year: 2022,
    brand: "Chevrolet",
    model: "FZ28",
    fullName: () => {
        return this.brand + " " + this.model + " " + this.year  
    }

}

// Aquí estoy definiendo la variable myCar y asignándole 
let myCar = auto.fullName