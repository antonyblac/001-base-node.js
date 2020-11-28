const argv = require('yargs')
    .command('listar', 'imprime en pantalla la tabla de multiplicar', {
        base: {
            demand: true
            alias: ''

        },

        limite: {
            alias:''
            default: 10

        }
    })

    .argv;
const multiplicar = require('./multiplicacion/multiplicacion');

console.log('la base insertada fue:', argv.base);
console.log('el limite insertada fue:', argv.limite);

//multiplicar
//.crearArchivo()
//.then(archivo => console.log(`el archivo ${archivo} ha sido generado con exito`))
//.catch(error  => console.log(`ocurrio un error ${error}`));