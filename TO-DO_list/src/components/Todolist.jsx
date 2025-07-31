import React, { useState } from 'react';

const Todolist = () => {
  const [task, settask] = useState([]);
  const [newtask, setnewtask] = useState("");

  function handelEvent(e) {
    setnewtask(e.target.value);
  }

  function addtask() {
    if (newtask.trim() === "") return;
    settask(task => [...task, newtask]);
    setnewtask("");
    const message = document.getElementById('happymessage');
    message.textContent = "Hey do your task!";
  }

  function removetask(index) {
    const update = task.filter((_, i) => i !== index);
    settask(update);
  }

  function happy(index) {
    const message = document.getElementById('happymessage');
    message.textContent = "Well done!";
    const del = task.filter((_, i) => i !== index);
    settask(del);
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200">
        <div className="bg-white/30 backdrop-blur-lg shadow-2xl rounded-3xl p-10 w-full max-w-2xl border border-white/40">
          <h1 id="happymessage" className="text-3xl font-bold text-center text-gray-800 mb-2">
            Hey!
          </h1>
          <h2 className="text-xl text-center font-semibold text-blue-700 underline mb-6">
            TO-DO List
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
            <input
              className="flex-1 border border-gray-300 rounded-xl px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              type="text"
              placeholder="Enter a task..."
              value={newtask}
              onChange={handelEvent}
            />
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl shadow-lg transition"
              onClick={addtask}
            >
              ADD TASK
            </button>
          </div>

          <ul className="space-y-4">
            {task.map((task, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-white/60 backdrop-blur-md p-4 rounded-xl shadow-md"
              >
                <div className="flex items-center gap-4 text-lg font-medium text-gray-700">
                  <span className="text-blue-600 font-bold">{index + 1}.</span>
                  <span>{task}</span>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => removetask(index)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition"
                  >
                    DELETE
                  </button>
                  <button
                    onClick={() => happy(index)}
                    className="bg-green-500 hover:bg-green-500 text-white px-4 py-2 rounded-xl transition"
                  >
                    DONE
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Todolist;
