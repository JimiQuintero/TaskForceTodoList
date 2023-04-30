import React, { useContext } from "react";
import { TodoContext } from "../../TodoContext";

function TodoCounter() {
  const { completeCount, pendingCount, totalCount } = useContext(TodoContext);
  return (
    <>
      <div className="grid grid-cols-1 w-auto sm:w-full overflow-x-auto">
        <table className="table font-rela font-medium">
          <thead>
            <tr>
              <th className="text-center">Total de tareas</th>
              <th className="text-center">Completadas</th>
              <th className="text-center">Pendientes</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover">
              <th className="text-center">{totalCount}</th>
              <th className="text-center">{completeCount}</th>
              <th className="text-center">{pendingCount}</th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TodoCounter;
