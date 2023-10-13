const readline = require('readline-sync');

const tasks = [];

function agregarTarea() {
  return new Promise((resolve) => {
    const indicator = tasks.length + 1;
    const description = readline.question('Ingrese la descripción de la tarea: ');
    tasks.push({ indicator, description, completed: false });
    console.log(`Tarea ${indicator} añadida: ${description}`);
    resolve();
  });
}

function eliminarTarea() {
  return new Promise((resolve, reject) => {
    const taskNumber = readline.question('Ingrese el número de la tarea a eliminar: ');
    if (taskNumber >= 1 && taskNumber <= tasks.length) {
      tasks.splice(taskNumber - 1, 1);
      console.log(`Tarea ${taskNumber} eliminada.`);
      resolve();
    } else {
      console.log('Número de tarea no válido.');
      reject('Número de tarea no válido');
    }
  });
}

function completarTarea() {
  return new Promise((resolve, reject) => {
    const taskNumber = readline.question('Ingrese el número de la tarea completada: ');
    if (taskNumber >= 1 && taskNumber <= tasks.length) {
      tasks[taskNumber - 1].completed = true;
      console.log(`Tarea ${taskNumber} completada.`);
      resolve();
    } else {
      console.log('Número de tarea no válido.');
      reject('Número de tarea no válido');
    }
  });
}

function mostrarTarea() {
  console.log('Lista de tareas:');
  tasks.forEach((task) => {
    const status = task.completed ? '[X]' : '[ ]';
    console.log(`${status} ${task.indicator}. ${task.description}`);
  });
}

async function main() {
  while (true) {
    console.log('\nOpciones:');
    console.log('1. Añadir tarea');
    console.log('2. Eliminar tarea');
    console.log('3. Completar tarea');
    console.log('4. Mostrar tareas');
    console.log('5. Salir');
  
    const option = readline.question('Seleccione una opción: ');
  
    try {
      switch (option) {
        case '1':
          await agregarTarea();
          break;
        case '2':
          await eliminarTarea();
          break;
        case '3':
          await completarTarea();
          break;
        case '4':
          mostrarTarea();
          break;
        case '5':
          process.exit(0);
        default:
          console.log('Opción no válida.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
}

main();
