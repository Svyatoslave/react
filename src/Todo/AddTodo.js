import React, { useState } from "react";
import PropTypes from "prop-types";

const useInputvalue = (defaultValue = "") => {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: { value, onChange: (event) => setValue(event.target.value) },
    clear: () => setValue(""),
    value: () => value,
  };
};

const AddTodo = ({ onCreate }) => {
  const input = useInputvalue("");

  const submitHandler = (event) => {
    event.preventDefault();

    if (input.value().trim()) {
      onCreate(input.value());
      input.clear();
      //   setValue("")
    }
  };

  return (
    <form style={{ marginBottom: "1rem" }} onSubmit={submitHandler}>
      <input {...input.bind} />
      <button type="submit">Add todo</button>
    </form>
  );
};

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default AddTodo;