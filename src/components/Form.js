import React from "react";

export default function Form({ handleSubmit, value, setValue }) {
  const handleChange = (e) => {
    console.log("handleChange Log :", e.target.value);
    // this.setState({ value: e.target.value });
    setValue(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex pt-2">
        <input
          className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow"
          type="text"
          name="value"
          placeholder="해야 할 일을 입력하세요."
          value={value}
          onChange={handleChange}
        />
        <input
          className="p-2 text-blue-500 border-2 border-blue-300 rounded hover:text-white hover:bg-blue-300"
          type="submit"
          value="입력"
        />
      </form>
    </div>
  );
}
