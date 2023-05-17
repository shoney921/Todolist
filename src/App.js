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
    <div className="flex items-center justify-center w-screen h-screen bg-blue-50">
      <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>TO DO LIST</h1>
        </div>
        <List todoData={todoData} setTodoData={setTodoData} />
        <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />
      </div>
    </div>
  );
}
