// ejercicio 1
console.log("hola!");
// ejercicio 2
array = ["pepe", "jose"];
const MostrarFlecha = () => {
    console.log("Funcion en flecha:");
    array.forEach(element => {
        console.log(`elemento: ${element}`);
    });
}
function MostrarTradicional() {
    console.log("Funcion tradicional:");
    array.forEach(element => {
        console.log(`elemento: ${element}`);
    });
}
MostrarFlecha();
MostrarTradicional();
// ejercicio 3
const Agregar = () => {
    console.log("Agregar");
    const nuevo = "juan"
    array.push(nuevo);
}
Agregar();
MostrarFlecha();
// ejercicio 4
const BuscarPosicion = () => {
    console.log(`la ultima posicion de juan: ${array.lastIndexOf("juan")}`)
}
BuscarPosicion();
// ejercicio 5
arrayNumeros = [1,2,3,4,5];
const Suma = () => {
    let suma = 0;
    arrayNumeros.forEach(element => {
        suma += element;
    });
    console.log(`La suma de todos los numeros del array es ${suma}`)
}
Suma();
// ejercicio 6
const Invertir = () => {
    console.log(`Array no invertido: ${arrayNumeros}`);
    console.log(`Array invertido: ${arrayNumeros.reverse()}`);
}
Invertir();
// ejercicio 7
arrayDesordenado = [2,5,1,7,3]
const Ordenar = () => {
    console.log(`Array no ordenado: ${arrayDesordenado}`);
    console.log(`Array ordenado: ${arrayDesordenado.sort()}`);
}
Ordenar();
// ejercicio 8
const Filtar = () => {
    console.log(`filtar los numeros mayores a 2 del array ${arrayDesordenado}`)
    console.log(`Filtracion: ${arrayDesordenado.filter((e) => e > 2)}`)
}
Filtar();
// ejercicio 9
array2 = [1,2,3,2,6,2]
suma2 = 0;
const CuantasVeces = () => {
    console.log(`Cuantas veces aparece el 2 en este array: ${array2}`)
    array2.forEach(element => {
        if(element === 2){
            suma2 ++;
        }
    });
    console.log(`La cantidad es ${suma2}`)
}
CuantasVeces();