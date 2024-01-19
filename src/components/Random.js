/* eslint-disable jsx-a11y/alt-text */
import React, { useState,useEffect } from 'react';
import Spinner from './Spinner';
import axios from 'axios';

 const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
const Random = () => {
  const [gif,setGif]=useState('');
  const [loading,setLoading]=useState('false');
 

  async function fetchData()
  {
    setLoading(true)
    const url =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
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
    <div className='w-1/2 rounded-lg bg-green-500 border border-black 
    flex flex-col items-center gap-y-5 mt-[15px]  '>

      <h1 className='mt-[10px] text-3xl underline uppercase font-bold'>A Random Gif</h1>

      {loading ? (
        <Spinner />
      ) : (
        <img src={gif} width="450" alt="Random Gif" />
      )}

      <button
        onClick={() => fetchData()}
        className='w-10/12 bg-white text-lg uppercase rounded-2xl py-2 mb-[6px] text-center '
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
