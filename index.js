const readline = require('readline-sync');

const tasks = [];

function agregarTarea() {
  const indicator = tasks.length + 1;
  const description = readline.question('Ingrese la descripcion de la tarea: ');
  tasks.push({ indicator, description, completed: false });
  console.log(`Tarea ${indicator} añadida: ${description}`);
}

function eliminarTarea() {
  const taskNumber = readline.question('Ingrese el numero de la tarea a eliminar: ');
  if (taskNumber >= 1 && taskNumber <= tasks.length) {
    tasks.splice(taskNumber - 1, 1);
    console.log(`Tarea ${taskNumber} eliminada.`);
  } else {
    console.log('Numero de tarea no valido.');
  }
}

function completarTarea() {
  const taskNumber = readline.question('Ingrese el numero de la tarea completada: ');
  if (taskNumber >= 1 && taskNumber <= tasks.length) {
    tasks[taskNumber - 1].completed = true;
    console.log(`Tarea ${taskNumber} completada.`);
  } else {
    console.log('Numero de tarea no valido.');
  }
}

function mostrarTarea() {
  console.log('Lista de tareas:');
  tasks.forEach((task) => {
    const status = task.completed ? '[X]' : '[ ]';
    console.log(`${status} ${task.indicator}. ${task.description}`);
  });
}

while (true) {
  console.log('\nOpciones:');
  console.log('1. Añadir tarea');
  console.log('2. Eliminar tarea');
  console.log('3. Completar tarea');
  console.log('4. Mostrar tareas');
  console.log('5. Salir');

  const option = readline.question('Seleccione una opcion: ');

  switch (option) {
    case '1':
        agregarTarea();
      break;
    case '2':
        eliminarTarea();
      break;
    case '3':
        completarTarea();
      break;
    case '4':
       mostrarTarea();
      break;
    case '5':
      process.exit(0);
    default:
      console.log('Opción no válida.');
  }
}
