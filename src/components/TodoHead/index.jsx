import React, { useContext } from "react";
import { TodoContext } from "../../TodoContext";

function TodoHead({ titleHead }) {
  const { deleteAllComplete } = useContext(TodoContext);
  return (
    <>
      <div className="card-body w-72 sm:w-full">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-rela w-80 sm:w-80 text-2xl text-violet-900 font-black mb-3 sm:mb-0">
            {titleHead}
          </h2>
          <button
            className="btn btn-error shadow-lg font-rela font-medium"
            onClick={deleteAllComplete}
          >
            Eliminar tareas completadas
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoHead;
