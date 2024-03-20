import React from "react";

const NavBar = ({handleSort}) => {
  return (
    <div className="w-100">
      <ul className="flex flex-row justify-center items-center">
        <li className="p-2 m-2">Sort By</li>
        <li className="p-2 m-2">
          <button onClick={()=>handleSort("upvote")} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded shadow-md">
            Most Upvoted
          </button>
        </li>
        <li className="p-2 m-2">
          <button onClick={()=>handleSort("date")} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded shadow-md">
            Most Recent
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
