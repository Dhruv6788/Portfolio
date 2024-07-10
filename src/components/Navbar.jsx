import React, { useContext, useEffect } from 'react'
import { MyContext } from '../context/Context'

const Navbar = () => {

  const { contextData, updateContextData } = useContext(MyContext)
  const { bg, text, hoverBg } = contextData
  useEffect(() => {
    console.log(bg)
    console.log(text)
    console.log(hoverBg)
  }, [])
  const contextTheme = {
    bg: "rgb(41, 95, 131)",
    text: 'black'
  }

  return (
    <div className="w-full" style={{ background: bg, color: text }}>
      <div className='font-[ase] relative flex px-5 justify-between py-5 '>
        <div className=' w-[30%]'>
          <h1 className='text-3xl'>DHRUV</h1>
          <h1 className='ml-2 text-3xl'>JOSHI</h1>
        </div>

        <div className='flex items-center justify-center  font-[cd] w-[30%]'>
          <button onClick={() => { updateContextData(contextTheme) }} className='text-sm px-2 py-2 h-10  rounded duration-300 hover:text-black hover:bg-purple-300'>Change Mood</button>
        </div>

        <div className='flex w-[30%] list-none gap-10 items-center justify-center font-[cd] font-extralight text-gray-300'>
          <li className={`cursor-pointer duration-300 hover:bg-${hoverBg} px-3 py-1 rounded hover:text-black`} style={{ color: text }}>About</li>
          <li className={`cursor-pointer duration-300 hover:bg-{{hoverBg}} px-3 py-1 rounded hover:text-black`} style={{ color: text }}>About</li>
          <li className={`cursor-pointer duration-300 hover:bg-{{hoverBg}} px-3 py-1 rounded hover:text-black`} style={{ color: text }}>About</li>
          <li className={`cursor-pointer duration-300 hover:bg-{{hoverBg}} px-3 py-1 rounded hover:text-black`} style={{ color: text }}>About</li>
        </div>
      </div>
    </div>
  )
}

export default Navbar