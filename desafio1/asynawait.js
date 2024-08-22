function task1(callback) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
       if (resolve)
       {
        console.log("Tarea 1");
        resolve(); 
       }
        else
        {
          reject(new Error('Error en la tarea 1'));
        }
      }, 2000); 
    });
  }
  
  function task2(callback) {
    return new Promise((resolve, reject) => {
       
      setTimeout(() => {
      if (resolve)
        {
          console.log("Tarea 2");
          resolve(); 
        }
        else
        {
          reject(new Error('Error en la tarea 2'));
        }
      }, 1000); 
    });
  }
  
  function task3() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (resolve)
        {
          console.log("Tarea 3");
          resolve(); 
        }
        else
        {
          reject(new Error('Error en la tarea 3'));
        }
      }, 3000); 
    });
  }
  function mainPromise() {
   try
    {
     Promise.all([task1(), task2(), task3()])
      .then(() => {
             console.log('Todas las tareas completadas');
      })
      .catch((error) => {
        console.log(error.message);
      });
    }
    catch (error)
    {
      console.log(error.message);
    }
  }
    mainPromise();
    