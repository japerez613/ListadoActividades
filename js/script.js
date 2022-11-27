//validar si el input esta vacio
document.getElementById('registrar').onclick = function()
{
    //valida si el usuario ingresa valor vacio
    if(document.querySelector('#caja1 input').value.length == 0)
    {
        Swal.fire(
            'Información:',
            'Por Favor, Ingrese Una Tarea',
            'error'
          );
    }
    else
    {
        Swal.fire(
            'Información:',
            'Se registro la tarea.',
            'success'
          );
        //coloca el registro 
        document.querySelector('#tareas').innerHTML
        += `<div class="tareas">
        <span id="nombreTarea">
            ${document.querySelector('#caja1 input').value}
        </span>
        <button class="delete">
        <i class="fa-solid fa-trash"></i>
        </button>
        </div>
        `;
        
        //variable para eliminar un registro
        var actualTarea = document.querySelectorAll('.delete');

        for(var i = 0; i < actualTarea.length; i++)
        {
            actualTarea[i].onclick = function()
            {
                this.parentNode.remove();
            }
        }
        
        //variable para tablar una tarea
        var tareas = document.querySelectorAll('.tareas');

        for(var j = 0; j < tareas.length; j++)
        {
            tareas[j].onclick = function()
            {
                this.classList.toggle('completo');
                Swal.fire(
                    'Información:',
                    'Usted ya finalizo la tarea.',
                    'success'
                  );
            }
        }
        //Al hacer clic coloca la caja de texto en vacio
        document.querySelector('#caja1 input').value = '';
    }
}

