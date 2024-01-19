/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState,useEffect } from 'react';
import React from 'react';
import Spinner from './Spinner';
import axios from 'axios';

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
   const[tag,setTag]=useState()
   const [gif,setGif]=useState('');
   const [loading,setLoading]=useState('false');

   async function fetchData()
   {
   setLoading(true)
   const url =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
      const {data}=await axios.get(url);
    const imageSource=data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false)
 }

 useEffect (  ()=>
  {
      fetchData( );

  },[])

  return (
    <div className='w-1/2 rounded-lg bg-blue-500 border border-black 
    flex flex-col items-center gap-y-5 mt-[15px]  '>

         <h1 className=' mt-[10px]  text-3xl underline uppercase font-bold '>  Random {tag} Gif</h1>

            {
             loading ?
              (<Spinner/>):
               ( <img src={gif} width="450"/>)
            } 

            <input
            className=' w-10/12 text-lg py-2 rounded-lg mb-[20px] text-center'
            onChange={(event)=>setTag(event.target.value)}
            value={tag}
            />

         <button onClick={()=>fetchData(tag)} 
         className='w-10/12 bg-white text-lg uppercase rounded-2xl py-2 mb-[6px]  text-center '>
          Generate
         </button>
    </div>
  )
         }

export default Tag;