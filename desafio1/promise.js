function task1(callback) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Tarea 1");
        resolve(); 
      }, 2000); 
    });
  }
  
  function task2(callback) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Tarea 2");
        resolve(); 
      }, 1000); 
    });
  }
  
  function task3() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Tarea 3");
        resolve(); 
      }, 3000); 
    });
  }
  function mainPromise() {
   Promise.all([task1(), task2(), task3()])
    .then(() => {
         console.log('Todas las tareas completadas');
    })
  }
    mainPromise();
