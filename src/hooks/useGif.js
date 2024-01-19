/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */

import { useEffect,useState } from 'react'
import axios from 'axios'


const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

const useGif = (tag) => {

    const[gif,setGif]=useState('')
    const[loading,setloading]=useState('false')
    const randomemeUrl=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const tagmemeUrl=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
       
     async function fetchData (tag)
     {   setloading(true);
        const {data}=await axios.get(tag ? tagmemeUrl:randomemeUrl);
        const imageSource=data.data.images.downsized_large.url;
         setGif(imageSource);
         setloading(false);
     }
  
     useEffect (  ()=>
     {
         fetchData('car');
  
     },[])
     return{ gif,loading,fetchData}
    }
    export default useGif;