import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../Context";

function TodoItem({ todo, onChange }) {
  const { removeTodo } = useContext(Context);
  const classes = [];

  if (todo.completed) {
    classes.push("done");
  }
  return (
    <li className="li">
      <span className={classes.join(" ")}>
        <input
          className="input"
          type="checkbox"
          checked={todo.completed}
          onChange={() => onChange(todo._id)}
        />
        <strong>{todo._id}</strong>
        &nbsp;
        {todo.title}
      </span>
      <button className="rm" onClick={() => removeTodo(todo._id)}>
        &times;
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default TodoItem;
