function task1(callback) {
    setTimeout(() => {
      console.log("Tarea 1");
      callback(); 
    }, 2000); 
  }
  
  function task2(callback) {
    setTimeout(() => {
      console.log("Tarea 2");
      callback(); 
    }, 1000); 
  }
  
  function task3() {
    setTimeout(() => {
      console.log("Tarea 3");
    }, 3000); 
  }
  
  function mainCallback() {
    task1(() => {
      task2(() => {
        task3();
      });
    });
  }
  
  mainCallback();