import React from 'react';
import { FaSadTear } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import gif from "/public/404.gif"
const Error = () => {
    document.title="Page Not Found"
    return (
        <div>
            <img className='h-2/3 '  src={gif} alt="" />
            <div className=' absolute bottom-1 left-1/2 bg-blue-100 p-5 rounded-xl drop-shadow-xl border-2 border-x-red-200'>
                <h1 className='text-3xl text-center'>Page not found <span className='flex justify-around py-3'><FaSadTear color='a333ff'/></span></h1>
                <Link to={'/'}>
                <button className='btn btn-primary'>Let's Go back to Home</button></Link>
            </div>
        </div>
    );
};

export default Error;