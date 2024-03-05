import { useState } from "react";

function App() {
  const colourList = ["Green", "Red", "Orange", "Purple", "Violet"];
  const [bgColor, setBgColor] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: bgColor }}
    >
      <div className="fixed flex flex-warp justify-center top-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {colourList.map((color) => (
            <button 
            onClick={() => setBgColor(color)}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:color}}>
              {color}

            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
