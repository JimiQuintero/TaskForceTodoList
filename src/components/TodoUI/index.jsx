//import React from "react";
import { useContext } from "react";
import CreateButton from "../CreateButton";
import EmptyTodo from "../EmptyTodo";
import TodoCounter from "../TodoCounter";
import TodoList from "../TodoList";
import TodoSearch from "../TodoSearch";
import Modal from "../../Modal";
import TodoForm from "../TodoForm";
import TodoHead from "../TodoHead";
import TodoItem from "../TodoItem";
import { TodoContext } from "../../TodoContext";
import Loader from "../Loader";
function TodoUI() {
  const { todoArray, setTodoArray, error, loading } = useContext(TodoContext);

  return (
    <div>
      {/* {error && <p>Desesperate, hubo un error</p>} */}
      {!loading && todoArray.length <= 0 && <EmptyTodo />}
      {todoArray.length >= 1 ? (
        <div>
          <TodoCounter />
          <TodoList>
            <div className="container mx-auto w-auto sm:w-full ">
              <div className="card w-auto sm:w-full bg-base-100 shadow-xl mt-5">
                <div className="flex flex-col sm:flex-row items-center justify-center mt-4">
                  <CreateButton />
                  {todoArray.length >= 1 ? <TodoSearch /> : null}
                </div>
                <TodoHead titleHead={"Lista de Tareas"} />
                <TodoItem todoArray={todoArray} setTodoArray={setTodoArray} />
              </div>
            </div>
          </TodoList>
        </div>
      ) : (
        loading && <Loader />
      )}

      <Modal>
        <TodoForm />
      </Modal>
    </div>
  );
}

export default TodoUI;
