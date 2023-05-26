import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import useTitle from '../../Hooks/useTitle';
const Update = () => {
  useTitle("Update")

    const navigate=useNavigate()
    // const[data,setData]=useState([])
    // useEffect(()=>{

    // })
    const data=useLoaderData()
     const {_id,price, quantity, description,} = data

    
  const handleUpdate = event => {
    event.preventDefault();
    const form = event.target;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const description = form.description.value;
    console.log(quantity, price,description);
    const updatedtoy = { quantity, price,description };
    fetch(`https://y-inky-iota.vercel.app/alltoys/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedtoy)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.modifiedCount > 0) {  
                                    
                        Swal.fire({
                            icon: 'success',
                            title: 'Item updated',
                            text: 'This toy is updated in the database',
                            
                          })
                      form.reset();
                      navigate('/my')
                    }
                })
    
}


    return ( <div className='mx-40 my-10'>
        
    <form onSubmit={handleUpdate} className="flex flex-col gap-6">
      <label htmlFor="price">Set new Price</label>
      <input
        id="price"
        defaultValue={price}
        className="px-5 py-3 border-2 rounded-md border-stone-500 bg-stone-300"
        type="text"
      />
      <label htmlFor="quantity">Set new Quantity</label>
      <input
        id="quantity"
        defaultValue={quantity}
        className="px-5 py-3 border-2 rounded-md border-stone-500 bg-stone-300"
        type="number"
      />
      <label htmlFor="description">Set new Description</label>
      <textarea id="description" className="textarea " defaultValue={description}></textarea>
      
      <input
        className="px-5 py-3 border-2 rounded-md border-stone-800 cursor-pointer bg-accent-focus text-white text-2xl"
        type="submit"
        value={"update"}
      />
    </form>
  </div>

    );
};

export default Update;