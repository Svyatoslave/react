import React, { useEffect, useState } from "react";
import TodoList from "./Todo/TodoList";
import Context from "./Context";
import Loader from "./Loader";
import Modal from "./Modal/Modal";

const AddTodo = React.lazy(() => import("./Todo/AddTodo"));

const App = () => {
  const [todos, setTodos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    fetch("http://localhost:8888/todos")
      .then((response) => response.json())
      .then((todos) => {
        setTimeout(() => {
          setTodos(todos);
          setLoading(false);
        }, 2000);
      });
  }, []);

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo._id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  const addTodo = (title, _id) => {
    setTodos(todos.concat([{ title, id: _id, completed: false }]));
  };

  const [theme, setTheme] = useState("default");

  const handleClick = () => {
    if (theme === "default") {
      setTheme("black");
    } else {
      setTheme("default");
    }
  };

  return (
    <Context.Provider value={{ removeTodo }}>
      <div
        className={
          theme === "black" ? "black-background" : "default-background"
        }
      >
        <div className="wrapper">
          <h1>Todos</h1>
          <Modal theme={theme}></Modal>
          <button onClick={handleClick}>Сменить тему</button>

          <React.Suspense fallback={<p>Loading...</p>}>
            <AddTodo onCreate={addTodo} />
          </React.Suspense>

          {loading && <Loader />}
          {todos.length ? (
            <TodoList todos={todos} onToggle={toggleTodo}></TodoList>
          ) : (
            !loading && <p>No Todos</p>
          )}
        </div>
      </div>
    </Context.Provider>
  );
};

export default App;
