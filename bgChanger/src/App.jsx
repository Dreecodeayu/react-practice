import { useState } from 'react'

function App() {
  const [color, setColor] = useState('olive');

  return (
    
    <div className = "w-full h-screen px-0 py-0"  style={{ backgroundColor: color }}>
      <div className='fixed flex justify-center bottom-12 inset-x-0'>
        <div className = "flex flex-wrap justify-center shadow-lg bg-white rounded-3xl gap-4 px-2 py-2">
          <button className='outline-none px-4 rounded-full' style = {{backgroundColor:"red", color:"white"}} onClick={()=>setColor("red")}>Red</button>
          <button className='outline-none px-4 rounded-full' style = {{backgroundColor:"blue", color:"white"}} onClick={()=>setColor("blue")}>Blue</button>
          <button className='outline-none px-4 rounded-full' style = {{backgroundColor:"green", color:"white"}} onClick={()=>setColor("green")}>Green</button>
          <button className='outline-none px-4 rounded-full' style = {{backgroundColor:"black", color:"white" }} onClick={()=>setColor("black")}>Black</button>
        </div>
      </div>
    </div>
    
  )
}

export default App
