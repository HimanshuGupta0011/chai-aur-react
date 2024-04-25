import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("white");
  const handleClick = (e)=>{
    let newClr = e.target.dataset.color
    setBgColor(newClr)
  }
  return (
    <>
      <div
        className="w-full h-screen flex justify-center items-end"
        style={{ backgroundColor: bgColor }}
      >
        <div className="bg-white flex flex-wrap items-center justify-around h-auto w-[80%] mb-[5rem] rounded-[2rem] text-[1.1rem] font-bold border-[2px] cursor-pointer text-white px-3">
          <div
            className="bg-[red] px-4 py-2 m-3 rounded-[3rem]"
            data-color="red"
            onClick={handleClick}
          >
            Red
          </div>
          <div
            className="bg-[green] px-4 py-2 m-3 rounded-[3rem]"
            data-color="green"
            onClick={handleClick}
          >
            Green
          </div>
          <div
            className="bg-[blue] px-4 py-2 m-3 rounded-[3rem]"
            data-color="blue"
            onClick={handleClick}
          >
            Blue
          </div>
          <div
            className="bg-[olive] px-4 py-2 m-3 rounded-[3rem]"
            data-color="olive"
            onClick={handleClick}
          >
            Olive
          </div>
          <div
            className="bg-[grey] px-4 py-2 m-3 rounded-[3rem]"
            data-color="gray"
            onClick={handleClick}
          >
            Gray
          </div>
          <div
            className="bg-[yellow] px-4 py-2 m-3 rounded-[3rem] text-black"
            data-color="yellow"
            onClick={handleClick}
          >
            Yellow
          </div>
          <div
            className="bg-[pink] px-4 py-2 m-3 rounded-[3rem] text-black"
            data-color="pink"
            onClick={handleClick}
          >
            Pink
          </div>
          <div
            className="bg-[purple] px-4 py-2 m-3 rounded-[3rem]"
            data-color="purple"
            onClick={handleClick}
          >
            Purple
          </div>
          <div
            className="bg-[lavender] px-4 py-2 m-3 rounded-[3rem] text-black"
            data-color="lavender"
            onClick={handleClick}
          >
            Lavender
          </div>
          <div
            className="bg-[white] px-4 py-2 m-3 rounded-[3rem] text-black"
            data-color="white"
            onClick={handleClick}
          >
            White
          </div>
          <div
            className="bg-[black] px-4 py-2 m-3 rounded-[3rem]"
            data-color="black"
            onClick={handleClick}
          >
            Black
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
