import React from "react";
import CreateButton from "../CreateButton";

function EmptyTodo() {
  return (
    <div className="my-4 text-2xl text-slate-50">
      <p className="mb-5">¡Crea tu primera tarea!</p>
      <CreateButton />
    </div>
  );
}

export default EmptyTodo;
