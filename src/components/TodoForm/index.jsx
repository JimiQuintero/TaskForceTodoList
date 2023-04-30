import { useContext } from "react";
import { TodoContext } from "../../TodoContext";

function TodoForm() {
  const { formData, handleChange, addTodo, todoEditId } =
    useContext(TodoContext);

  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            {todoEditId ? "Actualiza la Tarea" : "Escribe una TAREA NUEVA"}
          </h3>

          <form onSubmit={addTodo}>
            <input
              type="text"
              placeholder="Titulo"
              className="input input-bordered input-primary w-full my-3 max-w-xs"
              name="titulo"
              value={formData.titulo}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Descripción"
              className="input input-bordered input-primary w-full max-w-xs"
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
            />
            <div className="mt-3">
              <button type="submit" className="btn btn-md btn-primary">
                {todoEditId ? "Actualizar Tarea" : "Agregar Tarea"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TodoForm;
