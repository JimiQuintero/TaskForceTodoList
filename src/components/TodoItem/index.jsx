import React, { useContext } from "react";
import { TodoContext } from "../../TodoContext";
import "./TodoItem.css";

function TodoItem() {
  const { todoArray, toggleTodo, deleteTodo, setTodoEdit } =
    useContext(TodoContext);

  return (
    <>
      <div className="overflow-x-auto w-96 sm:w-full p-4">
        <table className="table w-full font-rela font-medium">
          <thead>
            <tr>
              <th></th>
              <th>Titulo</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {todoArray.map((todo) => (
              <tr className="hover" key={todo.id}>
                <th>
                  <input
                    type="checkbox"
                    checked={todo.isComplete}
                    onChange={() => toggleTodo(todo.id)}
                    className="checkbox checkbox-primary"
                  />
                </th>
                <th className={`${todo.isComplete ? "line-through" : ""}`}>
                  {todo.titulo}
                </th>
                <th className={`${todo.isComplete ? "line-through" : ""}`}>
                  {todo.descripcion}
                </th>
                <th>
                  {todo.isComplete && (
                    <span className="btn-sm btn-success rounded-md">
                      Completada
                    </span>
                  )}
                  <label
                    htmlFor="my-modal-3"
                    className="btn-md p-2 mx-2 rounded-md btn-primary"
                    onClick={() => setTodoEdit(todo.id)}
                  >
                    <ion-icon name="create-outline"></ion-icon>
                  </label>
                  <button
                    className="btn-sm btn-error rounded-md"
                    onClick={() => deleteTodo(todo.id, todo.titulo)}
                  >
                    <ion-icon name="trash-outline"></ion-icon>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TodoItem;
