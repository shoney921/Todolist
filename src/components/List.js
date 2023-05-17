import React from "react";

export default function List({ todoData, setTodoData }) {
  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    console.log("newTodoData", newTodoData);
    // this.setState({ todoData: newTodoData });
    setTodoData(newTodoData);
  };

  const handleCompleteChange = (id) => {
    let newList = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });

    // this.setState({ todoData: newList });
    setTodoData(newList);
  };

  return (
    <div>
      {todoData.map((data) => (
        <div key={data.id}>
          <div className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded">
            <div className="items-center">
              <input
                type="checkbox"
                defaultChecked={data.completed}
                onChange={() => handleCompleteChange(data.id)}
              />{" "}
              <span className={data.completed ? "line-through" : undefined}>
                {data.title}
              </span>
            </div>
            <div>
              <button
                className="px-4 py-1 float-right"
                onClick={() => handleClick(data.id)}
              >
                X
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
