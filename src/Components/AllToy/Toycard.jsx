import React, { useContext } from "react";
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';





const Toycard = (props) => {
  const { user } = useContext(AuthContext);
  console.log(user)

  const { price, addedBy, category, quantity, image, toy_name ,_id} = props.product;
 
    
    console.log(_id)
   
  
 
  return <div className="my-5 py-4 bg-stone-300 rounded-xl grid grid-cols-5">
    <div className="flex items-center pl-5">
        <img src={image} className="w-20 h-20 rounded-lg"/>
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
    <Link to={`/toydetail/${_id}`}><button className="btn btn-accent-focus">view details</button></Link>
    </div>

</div>
 

    
  ;
};

export default Toycard;
