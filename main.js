do{
    opcion = Number(prompt('Elije la opcion deseada: 1 - Organizacion // 2 - Finanzas personales '));
    if (opcion == 1){
        alert('Nueva tarea');
    }else if (opcion == 2){
        alert('Nuevo movimiento');
    }else{
        alert('Numero ingresado incorrecto');
    } 
    }while ((opcion != 1) && (opcion != 2))
    
