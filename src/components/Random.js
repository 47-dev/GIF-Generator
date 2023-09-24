import useGif from "../hooks/useGif";
import React from "react";
import Spinner from './Spinner';

const Random = () => {

    const {gif, loading, fetchGif} = useGif();


  return (
    <div className='w-1/2  bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>A Random Gif</h1>
        {
            loading ? (<Spinner/>) : (<img src={gif} width="450" alt='gif'/>)
        }
        
        <button onClick={() => fetchGif()}
        className='w-9/12 mb-[20px] bg-yellow-500 text-lg py-2 rounded-lg'
        >Generate</button>
    </div>
  )
}

export default Random