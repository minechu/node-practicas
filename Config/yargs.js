

/*
* yargs permite crear comandos que se reciben en la consola y documentarlos
* Para esto usamos el metodo Command() recibe tres parametros Nombre del comando, descripción y las opciones en un objeto
* Ests opciones indica los parametros que reciben los comandos
* En este ejemplo los camdos listar y crear reciben como parametros base y limite 
* (demand quiere decir obligatorio, alias es una forma corta de llamar al parametro, default es un valor por defecto que tiene ese parametro)
* help() Agrega el comando en la ayuda de nuestar aplicación cuando ejecutamos npm app --help
* argv contiene los comandos en un arreglo y los parametros en un diccionario de clave/valor
*/

const Opts = {
    base : {
        demand : true,
        alias: 'b'
    },
    limite : {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
                .command('listar', 'Imprime en la consola la tabla de multiplicar', Opts)     
                .command('crear', 'Genera un archivo con la tabla de multiplicar', Opts)
                .help()
                .argv;

module.exports = {
    argv
}