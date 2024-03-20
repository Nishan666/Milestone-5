import React, { useState } from 'react'
import NavBar from './components/Task2/NavBar'
import Model from './components/Task2/Model'
import randomData from './task2Data'

const Task2 = () => {
    const [pageNo , setPageNo] = useState(1);
    
    const handleClick = (data)=>{
        data === "restart" && setPageNo(1);
        data === "next" && setPageNo(pageNo+1);
        data === "prev" && setPageNo(pageNo-1)
    }

  return (
    <>
        <NavBar handleClick={handleClick} pageNo={pageNo} end={randomData.length}/>
        <Model content={randomData[pageNo]}/>
    </>
  )
}

export default Task2