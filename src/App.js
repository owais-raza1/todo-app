import { useState } from "react";
import BtnComp from "./component/BtnComp";
import InpComp from "./component/InpComp";

function App() {
  const [editMode, setEditMode] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [list, setList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col items-center py-10">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <div className="flex mb-4">
          <InpComp
            value={inputVal}
            type="text"
            addFun={(e) => setInputVal(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Enter a new task"
          />
          <BtnComp
            className="bg-green-500 text-white p-2 rounded-r-lg hover:bg-green-700 transition-colors duration-200 ml-2"
            text={editMode ? "Update" : "Add"}
            addFun={() => {
              if (inputVal.trim() === "") {
                alert("Please write some todo");
                return;
              }
              if (editMode) {
                let newList = [...list];
                newList[currentIndex] = inputVal;
                setList(newList);
                setEditMode(false);
                setCurrentIndex(null);
              } else {
                setList([inputVal, ...list]);
              }
              setInputVal("");
            }}
          />
        </div>
        <BtnComp
          className="bg-red-600 text-white p-2 mb-4 w-full rounded-lg hover:bg-red-700 transition-colors duration-200"
          text="Delete All"
          addFun={() => setList([])}
        />
        <ul className="space-y-2">
          {list.map((x, i) => (
            <li
              key={i}
              className="flex items-center justify-between bg-gray-100 p-2 rounded-lg shadow-md"
            >
              {x}
              <div className="flex space-x-2">
                <BtnComp
                  className="bg-red-600 text-white p-1 px-2 rounded hover:bg-red-700 transition-colors duration-200"
                  text="Delete"
                  addFun={() => {
                    let newList = list.filter((_, index) => index !== i);
                    setList(newList);
                  }}
                />
                <BtnComp
                  className="bg-blue-600 text-white p-1 px-2 rounded hover:bg-blue-700 transition-colors duration-200"
                  text="Edit"
                  addFun={() => {
                    setEditMode(true);
                    setInputVal(x);
                    setCurrentIndex(i);
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
