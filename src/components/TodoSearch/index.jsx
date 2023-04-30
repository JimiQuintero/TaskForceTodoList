import React from "react";

function TodoSearch() {
  return (
    <div className="mt-3 sm:mt-0 mx-8">
      <form>
        <input
          type="text"
          placeholder="Buscar tarea"
          className="input input-bordered input-primary w-52 sm:w-72 max-w-xs font-rela font-normal"
        />
        <button
          type="submit"
          className="btn btn-primary ml-2 font-rela font-bold"
        >
          Buscar
        </button>
      </form>
    </div>
  );
}

export default TodoSearch;
