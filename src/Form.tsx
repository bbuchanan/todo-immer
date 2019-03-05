import React, { useState, useContext } from "react";
import { TodoContext } from "./TodoContext";

const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: e => setValue(e.target.value),
    resetValue: () => setValue("")
  };
};

export default React.memo(() => {
  const { dispatch } = useContext(TodoContext);
  const { resetValue, ...text } = useInputValue("");

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        dispatch({ text: text.value, type: "ADD_TODO" });
        resetValue();
      }}
    >
      <input {...text} />
    </form>
  );
});
