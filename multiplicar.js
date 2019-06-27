/*
**Practica de node js 
*/
const fs = require('fs');
const colors = require('colors/safe');

const TablaMultiplicar = {
    crear : (base, limite = 10) => {
        let contenido = "";
        for(let i = 1; i <= limite; i++){
            contenido += `${base} X ${i} = ${base * i} \n`;
        }
        return contenido;
    }
}

const Archivo = {
    crear : (nombre, contenido) => {
        return new Promise( (resolve, reject) => {
            if(!nombre){
                reject("Se debe indicar el nombre del archivo.");
            }
            
            fs.writeFile(`./Tablas/${nombre}`, contenido, (err) => {
                if(err){
                    throw Error(err);
                }
                resolve(`El archivo ${colors.green(nombre)} fue creado exitosamente.`);
            });
        });
    }
}

const multiplicar = (base, limite) => {
    return new Promise( (resolve, reject) => {
        if(!base || !Number(base)) 
            reject(`Se debe indicar la base para la multiplicación.`);

        let contenido = TablaMultiplicar.crear(base, limite);
        Archivo.crear(`Tabla-${base}.txt`, contenido)
        .then(data => {
            resolve(data);
        }).catch(err => {
            reject(err);
        })
    })
}

const listar = (base, limite = 10) => {
    console.log('*************************'.green)
    console.log(`****Tabla del ${base}****`.green)
    console.log('*************************'.green)
    console.log(TablaMultiplicar.crear(base, limite));
}

module.exports = {multiplicar, listar};
