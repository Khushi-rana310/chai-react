//import { useState } from "react"
import React, { useState } from 'react';


function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={()=> setColor("red")} className='px-10 py-4 rounded-full text-white shadow-lg' style={{ backgroundColor: "red" }}>Red</button>
            <button onClick={()=> setColor("green")} className='px-10 py-4 rounded-full text-white shadow-lg' style={{ backgroundColor: "green" }}>Green</button>
            <button onClick={()=> setColor("blue")} className='px-10 py-4 rounded-full text-white shadow-lg' style={{ backgroundColor: "blue" }}>Blue</button>
            <button onClick={()=> setColor("olive")} className='px-10 py-4 rounded-full text-white shadow-lg' style={{ backgroundColor: "olive" }}>Olive</button>
            <button onClick={()=> setColor("white")} className='px-10 py-4 rounded-full text-black shadow-lg' style={{ backgroundColor: "white" }}>White</button>
            <button onClick={()=> setColor("pink")} className='px-10 py-4 rounded-full text-white shadow-lg' style={{ backgroundColor: "pink" }}>Pink</button>
            <button onClick={()=> setColor("grey")} className='px-10 py-4 rounded-full text-white shadow-lg' style={{ backgroundColor: "grey" }}>Grey</button>
            <button onClick={()=> setColor("yellow")} className='px-10 py-4 rounded-full text-white shadow-lg' style={{ backgroundColor: "yellow" }}>Yellow</button>
            <button onClick={()=> setColor("purple")} className='px-10 py-4 rounded-full text-white shadow-lg' style={{ backgroundColor: "purple" }}>Purple</button>
          </div>
        </div>

      </div>

    </>
  )
}

export default App
