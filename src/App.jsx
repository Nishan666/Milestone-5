import { useState } from "react";
import Task1 from "./Task1";
import Task2 from "./Task2";

function App() {
  const [choose, setChoose] = useState(0);

  const handleSelect = (task) => {
    setChoose(task);
  };

  return (
    <>
      <div className="w-100">
        <ul className="flex flex-row justify-center items-center">
          <li className="p-2 m-2">
            <button
              onClick={() => handleSelect(1)}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded shadow-md"
            >
              Task 1
            </button>
          </li>
          <li className="p-2 m-2">
            <button
              onClick={() => handleSelect(2)}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded shadow-md"
            >
              Task 2
            </button>
          </li>
        </ul>
      </div>

      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

      {choose === 1 && <Task1 />}
      {choose === 2 && <Task2 />}
    </>
  );
}

export default App;
