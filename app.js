const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors/safe');

console.log(argv);

let comando = argv._[0];

switch(comando) {
    case 'crear':
        let tarea = porHacer.f_crear(argv.descripcion);
        console.log(tarea);
    break;

    case 'listar':
        let listado = porHacer.f_getListado();
        
        for(let t of listado) {
            console.log(colors.green('======= Por Hacer ======='));
            console.log(t.descripcion);
            console.log(t.completado);
            console.log('Estado: ', (String(t.completado) === 'true') ? colors.red('Completado') : colors.red('Pendiente'));
            console.log(colors.green('=========================='));
        }
    break;

    case 'actualizar':
        let actualizado = porHacer.f_actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
    break;

    case 'borrar':
        let borrado = porHacer.f_borrar(argv.descripcion);
        console.log(borrado);
    break;

    default:
        console.log('Comando no valido');
}