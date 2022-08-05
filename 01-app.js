const paises = ['Alemania','Francia'];


function nuevoPais(pais,callback){
    setTimeout(()=>{
        paises.push(pais)
        callback();
    },3000);
}

function mostrarPais(){
    setTimeout(()=>{
        paises.forEach(pais =>{
            console.log(pais); 
        })
    },3000);
}

mostrarPais();
nuevoPais('Mexico',mostrarPais);


/* convirtiendo el codigo de arriba en una promesa  */

const paises=[];
const nuevoPais = pais => new Promise (resolve =>{
    setTimeout(()=>{
        paises.push(pais);
        resolve('exito');
    },3000)
    
})

nuevoPais('Alemania')
    .then(resolve =>{
        console.log(resolve);
        console.log(paises);
        return nuevoPais('Francia');
    })
    .then(resolve =>{
        console.log(resolve);
        console.log(paises);
    })



/* ejemplo de promises */

const nuevaPromesa = new Promise((resolve, reject) => {
    const descuento = false;
    if (descuento) {
        console.log('se cumplio la promesa');
    } else {
        console.log('No se cumplio');
    }
});


nuevaPromesa
    .then((resolve) => {
        console.log(resolve);
    })
    .catch(error => {
        console.log(error);
    })