import React from "react";

const NavBar = ({handleClick , pageNo, end} ) => {
  return (
    <div className="w-100">
      <ul className="flex flex-row justify-center items-center">
      <button onClick={()=>handleClick("restart")} className={pageNo != 1 ?"bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded shadow-md" :
          "bg-green-300 text-white font-bold py-2 px-4 rounded shadow-md"}>
            Restart
          </button>
        <li className="p-2 m-2">
          <button 
          disabled={pageNo === 1}
          onClick={()=>handleClick("prev")} className={pageNo != 1 ?"bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded shadow-md" :
          "bg-green-300 text-white font-bold py-2 px-4 rounded shadow-md"}>
            Prev
          </button>
        </li>
        <li className="p-2 m-2">
          <button 
          disabled={pageNo === end-1}
          onClick={()=>handleClick("next")}  className={pageNo != end-1 ?"bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded shadow-md" :
          "bg-green-300 text-white font-bold py-2 px-4 rounded shadow-md"}>
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
