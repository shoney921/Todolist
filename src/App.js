import "./App.css";
import React, { Component, useState } from "react";
import List from "./components/List";
import Form from "./components/Form";

export default function App() {
  const [todoData, setTodoData] = useState([
    {
      id: "1",
      title: "study",
      completed: true,
    },
    {
      id: "2",
      title: "clean",
      completed: false,
    },
  ]);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    // this.setState({ todoData: [...todoData, newTodo], value: "  " });
    setTodoData((prev) => [...prev, newTodo]);
    setValue("");
  };

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>TO DO LIST</h1>
        </div>

        <List todoData={todoData} setTodoData={setTodoData} />
        <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />
      </div>
    </div>
  );
}
