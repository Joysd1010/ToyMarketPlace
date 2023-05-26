import React from 'react';

const Catagory = ({name,img}) => {
   
    return (
        <div data-aos="zoom-in">
            <div>
            <div className='p-3 border-2 border-stone-600 rounded-xl'>
                <img src={img} className='w-56 h-40 rounded-xl my-2'/>
            <button className="btn btn-block">{name}</button>
            </div></div>
            
        </div>
    );
};

export default Catagory;