import React, { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Swal from "sweetalert2";

const TodoContext = React.createContext();

function TodoProvaider({ children }) {
  //Consumiendo el qustom Hook
  const {
    item: todoArray,
    setItem: setTodoArray,
    saveItem: saveTodosLocalStorage,
    loading,
  } = useLocalStorage("TODOS_V1", []);

  //Lógica para el componente Counter

  const completeCount = todoArray.filter(
    (todo) => todo.isComplete === true
  ).length;
  const pendingCount = todoArray.length - completeCount;

  const totalCount = todoArray.length;

  //Logica del componente TodoItem

  const [todoEditId, setTodoEditId] = useState(null);

  //Metodo para eliminar un Todo
  const deleteTodo = (id, titulo) => {
    Swal.fire({
      title: `¿Está seguro de eliminar la tarea ${titulo}?`,
      text: "¡No podrá revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#570DF8",
      cancelButtonColor: "#F87272",
      confirmButtonText: "¡Sí, eliminarlo!",
    }).then((result) => {
      if (result.isConfirmed) {
        const newTodos = todoArray.filter((todo) => todo.id != id);
        saveTodosLocalStorage(newTodos);
      }
    });
  };

  //Metodo para manejar el botón de tipo checkbox
  const toggleTodo = (id) => {
    const newTodo = [...todoArray];
    let todo = newTodo.find((todo) => todo.id === id);
    todo.isComplete = !todo.isComplete;
    saveTodosLocalStorage(newTodo);
  };

  //Metodo para eliminar Todos completados
  const deleteAllComplete = () => {
    Swal.fire({
      title: "¿Está seguro de eliminar las tareas completadas?",
      text: "¡No podrá revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#570DF8",
      cancelButtonColor: "#F87272",
      confirmButtonText: "¡Sí, eliminarlo!",
    }).then((result) => {
      if (result.isConfirmed) {
        const newTodo = todoArray.filter((todo) => todo.isComplete === false);
        saveTodosLocalStorage(newTodo);
      }
    });
  };

  //Logica del componente TodoForm

  const [formData, setFormData] = useState({ titulo: "", descripcion: "" });
  //console.log(formData);

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  //Metodo para agregar un Todo
  const addTodo = (e) => {
    e.preventDefault();

    if (todoEditId != null) {
      const newTodo = [...todoArray];
      let todo = newTodo.find((todo) => todo.id === todoEditId);
      todo.titulo = formData.titulo;
      todo.descripcion = formData.descripcion;
      saveTodosLocalStorage(newTodo);
      setTodoEditId(null);
      setFormData({ titulo: "", descripcion: "" });
    } else {
      if (formData.titulo !== "" && formData.descripcion != "") {
        const todo = formData;
        todo.isComplete = false;
        todo.id = Date.now();

        saveTodosLocalStorage([...todoArray, todo]);
        setFormData({ titulo: "", descripcion: "" });
        //console.log(todo);
      }
    }
  };

  // Metodo para actualizar(editar) un Todo

  // Metodo para editar un Todo
  const setTodoEdit = (id) => {
    const todo = todoArray.find((todo) => todo.id === id);
    setFormData({
      titulo: todo.titulo,
      descripcion: todo.descripcion,
    });
    setTodoEditId(id);
    //console.log("Click");
  };

  return (
    <TodoContext.Provider
      value={{
        todoArray,
        setTodoArray,
        completeCount,
        pendingCount,
        totalCount,
        deleteAllComplete,
        todoEditId,
        setTodoEditId,
        deleteTodo,
        toggleTodo,
        setTodoEdit,
        formData,
        setFormData,
        handleChange,
        addTodo,
        loading,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvaider };
