# TaskForceTodoList
Aplicación TodoList en react con TailwindCss para prueba técnica empresa TaskForce Consulting Colombia
## Aplicación de TodoList en React
Esta es una aplicación de TodoList simple hecha en React que le permite al usuario agregar,editar y eliminar tareas. 
La aplicación también tiene la capacidad de marcar tareas como completadas y filtrar tareas por su estado de completado.

### Funcionalidades:
La aplicación tiene las siguientes funcionalidades:
1.- Vista de bienvenida con un botón "Seguir adelante" que dirige al usuario a la vista de agregar tarea.
2.- Vista de agregar tarea con un formulario modal que permite al usuario ingresar un título y una descripción de la tarea.
3. Tablas de tareas pendientes y completadas que muestran todas las tareas, junto con opciones para marcar como completadas, editar y eliminar tareas.
4.- Capacidad para eliminar todas las tareas completadas de una sola vez.
5. Capacidad para agregar nuevas tareas.

####Cómo funciona:
La aplicación utiliza los siguientes hooks de React:
.- useState: para almacenar y actualizar el estado de la lista de tareas.
.- useEffect: para actualizar la lista de tareas después de cada operación de agregar, editar o eliminar tarea, y para almacenar la lista de tareas actualizada en localStorage.
.- useContext: para compartir el estado global de la lista de tareas entre los componentes de la aplicación.
.- Qustom hook para la logica de persistencia de datos en localStorage, loading y errores.

La aplicación también hace persistencia de datos en localStorage para garantizar que las tareas se mantengan después de que el usuario cierre la aplicación o la página web.

#### Instalación y uso

Para instalar y usar la aplicación, sigue estos pasos:

1.- Clona el repositorio en tu entorno local.
2.- Ejecuta npm install en el directorio del proyecto para instalar las dependencias.
3.- Ejecuta npm start para iniciar la aplicación en tu navegador.

¡Listo! Ahora puedes usar la aplicación para administrar tus tareas diarias.
