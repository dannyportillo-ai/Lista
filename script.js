const input = document.querySelector("#tarea");
const boton = document.querySelector("#agregar");
const lista = document.querySelector("#lista");

boton.addEventListener ("click", function (){

    if (input.value !=="") {

        const tarea = document.createElement("li"); 
    
         tarea.textContent = input.value;
         
         const eliminar = document.createElement("button");

         eliminar.textContent = "Eliminar";

         tarea.appendChild(eliminar);

         lista.appendChild(tarea);

         eliminar.addEventListener("click", function() {
            tarea.remove()
    });

    input.value = "";
    }
});
