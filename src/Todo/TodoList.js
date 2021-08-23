import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  return (
    <ul className="ul">
      {props.todos.map((todo) => {
        return (
          <TodoItem
            todo={todo}
            key={todo._id}
            onChange={props.onToggle}
          ></TodoItem>
        );
      })}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default TodoList;
