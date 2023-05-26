import React from "react";
import { RiDeleteBin6Line, RiEdit2Fill } from "react-icons/ri";
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa";
import MyToys from "./MyToys";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";




const Toycard = (props) => {
  const {toy_name,_id, rating,price, addedBy,quantity, description, email,image, materials, category,} = props.toy;
  const handleDelete=props.delete
//   const handleUpdateFetch=props.fetch
//   const handleUpdate = event => {
//     event.preventDefault();
//     const form = event.target;
//     const quantity = form.quantity.value;
//     const price = form.price.value;
//     const description = form.description.value;
//     console.log(quantity, price,description);
//     const updatedtoy = { quantity, price,description };
//     handleUpdateFetch(_id,updatedtoy,form)
    
// }





  return (
    <div>
      <div className="my-5 py-4 bg-stone-300 rounded-xl grid grid-cols-5">
        <div className="flex items-center pl-5">
          <img src={image} className="w-20 h-20 rounded-lg" />
          <div className="px-2">
            <h1 className="text-xl font-semibold">{toy_name}</h1>
            <div className="badge badge-outline text-lg">{category}</div>
          </div>
        </div>
        <div>
          <h1 className="text-center text-xl font-semibold">{price} $</h1>
        </div>
        <div>
          <h1 className="text-center text-xl font-semibold">{quantity}</h1>
        </div>
        <div>
          <h1 className="text-center text-xl font-semibold">{addedBy}</h1>
        </div>
        <div className="mx-auto">
            <Link to={`/update/${_id}`}>
        <button  className="btn btn-accent-focus mx-3">
            <RiEdit2Fill size={20} /></button></Link>
         
          <button onClick={()=>handleDelete(_id)} className="btn btn-accent-focus mx-3">
            <RiDeleteBin6Line size={20} />
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Toycard;
