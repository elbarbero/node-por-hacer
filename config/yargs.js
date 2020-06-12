const option1 = {
      descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
      },
      completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea'
      }
}

const {descripcion: option2} = option1;
//console.log({descripcion: option2});

const argv = require('yargs')
              .command('crear', 'Crear unelemento por hacer', {descripcion: option2})
              .command('actualizar', 'Actualiza el estado completado de una tarea', option1)
              .command('borrar', 'Borrar una tarea por hacer', option1)
              .help()
              .argv;

module.exports = {
    argv: argv
}