import React from "react";
import { useState } from "react";
import NavBar from "./components/Task1/NavBar.jsx";
import Table from "./components/Task1/Table.jsx";
import randomData from "./task1Data.js";

const Task1 = () => {
  const [data, setData] = useState(randomData);

  const handleSort = (type) => {
    const sorted = [...data];

    type === "upvote" && sorted.sort((a, b) => b.upvote - a.upvote);
    type === "date" &&
      sorted.sort((a, b) => new Date(a.date) - new Date(b.date));

    setData(sorted);
  };

  return (
    <>
      <NavBar handleSort={handleSort} />
      <Table data={data} />
    </>
  );
};

export default Task1;
