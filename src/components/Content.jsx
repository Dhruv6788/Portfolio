import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../context/Context'
import { useEffect } from 'react'

const Content = () => {
    const { contextData, updateContextData } = useContext(MyContext)
    const { bg, text, hoverBg } = contextData
    
    return (
        <div className='w-full px-5' style={{background: bg, color: text}}>
            <div className={`text-[${text}] font-[ase] flex items-center gap-40`}>
                <h1 className='text-[10vw] text-purple-200 opacity-70'>Full Stack</h1>
                <div>
                <p className='font-[cd] text-3xl opacity-50'>#Portfolio 2024 </p>
                </div>
            </div>
            <div className='text-white font-[ase] flex justify-center'>
                <h1 className='text-[10vw] text-purple-200 opacity-70'>Developer</h1>
            </div>
            <div>

            </div>
            <div className='mt-5 h-screen w-full py-5 px-10 font-[CD]'>
                <div className='w-full text-white flex justify-around'>
                    <div className='w-[33.33%] flex justify-center'>
                        <h1 className='font-bold' style={{color: text}}>{`{ About }`}</h1>
                    </div>
                    <div className='w-[33.33%] flex justify-center'>
                        <h1 className='font-bold' style={{color: text}}>{`{ About }`}</h1>
                    </div>
                    <div className='w-[33.33%] flex justify-center'>
                        <h1 className='font-bold' style={{color: text}}>{`{ About }`}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content