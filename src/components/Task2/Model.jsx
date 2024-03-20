import React from 'react'

const Model = ({content}) => {
  return (
    <div className="flex justify-center">
    <div className="w-1/2 shadow-2xl px-6 py-10 m-10">
        <h1 className="font-bold text-4xl text-center">{content.title}</h1>
        <p className="font-medium text-xl text-center p-4">{content.explanation}</p>
    </div>
    </div>
  )
}

export default Model