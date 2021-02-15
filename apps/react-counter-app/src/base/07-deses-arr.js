export const retornaArreglo = () =>{
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo(); 
// console.log(letras, numeros);


// Tarea
// 1. el primer valor del arr se llamará nombre
// 2. se llamará setNombre
const usState = ( valor ) => {
    return [ valor, ()=>{ console.log('Hola Mundo') } ];
}





