import React, { useState } from "react";
import { v4 as uuid } from "uuid";
const Header = ({ tasks, setTasks }) => {
  const [value, setValue] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    const task = {
      id: uuid(),
      title: value,
      isCompleted: false,
    };
    setTasks([task, ...tasks]);
    setValue("");
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={onFormSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </form>
    </header>
  );
};

export default Header;