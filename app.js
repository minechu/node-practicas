

const {multiplicar, listar} = require('./multiplicar.js');
const {argv} = require('./Config/yargs.js');

const comandos = {
    crear : () => {
        multiplicar(argv.base, argv.limite)
            .then( data => console.log(data))
            .catch( err => console.log(err));
    },
    listar : () => {
        listar(argv.base, argv.limite);
    },
    borrar: () => {console.log("Comando borrar")}
}

let parametro = argv._[0];
let comando;
if(comandos.hasOwnProperty(parametro)){
    comando = comandos[parametro];
}
else{
    throw Error("Parametro desconocido.");
}

comando();




/*let base = 0
if(argv.length >= 2){
    console.log("Entra");
    base = argv.find( (elemento) => elemento.indexOf('--base=') >= 0 || elemento.indexOf('-b=') >= 0 );
    base = argv[2].split('=')[1];
    console.log(base + 20);
}*/
