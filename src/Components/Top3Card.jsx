import React from 'react'

const Top3Card = ({bgColor, poster, Title, Description }) => {
  return (
    <div style={{backgroundColor: bgColor}} className='w-[420px] h-64 flex items-center justify-between gap-1 cursor-pointer hover:scale-105 duration-300 rounded-md p-5'>
        <div className="left">
            <img src={poster} alt="bookimg" className=' object-cover w-80 h-72 -rotate-6 -ml-10'/>
        </div>
        <div className="right w-full h-full text-white pr-5 flex flex-col items-start justify-center gap-5">
            <div className="title text-2xl font-bold">{Title}</div>
            <div className="Description text-[10px]">
            {Description}
            </div>
            <button className='border-2 border-white py-2 px-5 rounded-md hover:bg-zinc-800 duration-300 active:translate-y-1 active:transform'>Now Read</button>
        </div>
    </div>
  )
}

export default Top3Card