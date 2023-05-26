import React, { useEffect, useState } from 'react';
import Catagory from './Catagory';

const SpecialSec1 = () => {

const [catagories,setCatagory]=useState([])

useEffect(()=>{
    fetch('https://y-inky-iota.vercel.app/category')
    .then(res=>res.json())
    .then(data=>setCatagory(data))
})


    return (
        <div className='mx-20  my-7'>
            <h1 className='text-center text-lg md:text-4xl text-gray-500 py-8'> Find Your Desired Figure From these Hot Collection</h1>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-5'>
            {
                catagories.map(part=><Catagory key={part._id} name={part.category_name} img={part.category_image}/>)
            }</div>
        </div>
    );
};

export default SpecialSec1;