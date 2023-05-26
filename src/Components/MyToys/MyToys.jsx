import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import MyToycard from "./MyToycard";
import Swal from 'sweetalert2'
import useTitle from "../../Hooks/useTitle";


const MyToys = () => {
  useTitle("My Toys")
  const [limit, setLimit] = useState(21);

  const { user } = useContext(AuthContext);

  const Email = user.email;
  const name = user.displayName;
  const data = useLoaderData();
  const [mytoys, setMytoys] = useState([]);

  useEffect(() => {
    if (!user.email) return;

    const toysData = data.filter((info) => info.email == Email);
    setMytoys(toysData);
  }, [data]);
  const sort = () => {
    const myToys = [...mytoys];
    const sorted = myToys.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    setMytoys(sorted);
    // console.log(mytoys);
    console.log(sorted);
  };
  const deSort = () => {
    const myToys = [...mytoys];

    const desorted = myToys.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));

    setMytoys(desorted);

    console.log(desorted);
  };


//   const handleUpdateFetch=(_id,updatedtoy,form)=>{
//     fetch(`https://y-inky-iota.vercel.app/alltoys/${_id}`, {
//         method: 'PATCH',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify(updatedtoy)
//     })
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//             if (data.modifiedCount > 0) {

                
//                 const remaining = mytoys.filter(arr => arr._id !==_id);
//                 const updated = mytoys.find(arr => arr._id ===_id);
               
//                 const newToy = [updated, ...remaining];
//                 console.log(newToy)
//                 setMytoys(newToy);

//                 Swal.fire({
//                     icon: 'success',
//                     title: 'Item updated',
//                     text: 'This toy is updated in the database',
                    
//                   })
//               form.reset();
//             }
//         })
//   }
  
  const handleDelete=(_id)=>{
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`https://y-inky-iota.vercel.app/alltoys/${_id}`, {
                        method: 'DELETE'
                    })
                    .then(res=> res.json())
    .then(data => {
        console.log(data)
        if(data.deletedCount>0)
        {
            const myToys=[...mytoys]
            
            const remainder=myToys.filter(toy=>toy._id!==_id)
            console.log(myToys)
            setMytoys(remainder)
            
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
        }
    })
          
        }
      })
}
console.log(mytoys)

  const handleLimit = () => {
    setLimit(mytoys.length);
  };
  const handlelowLimit = () => {
    setLimit(21);
  };
  return (
    <div className="mx-24">
      <div className="flex justify-between">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
          All the added Toys by you
        </h1>

        <div className="collapse w-56">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium rounded-xl text-white text-center bg-stone-600">
            Sort toy data
          </div>
          <div className="collapse-content grid grid-cols-1  ">
            <button className="btn btn-accent-focus my-2" onClick={sort}>
              Price(low to high)
            </button>
            <button className="btn btn-accent-focus my-1" onClick={deSort}>
              Price(high to low)
            </button>
          </div>
        </div>
      </div>
      <div className="rounded-xl grid grid-cols-5 text-2xl bg-stone-600 py-4 my-4 text-white">
        <div className="text-center">
          <h1>Toy</h1>
        </div>
        <div className="text-center">
          <h1>Price</h1>
        </div>
        <div className="text-center">
          <h1>Quantity</h1>
        </div>
        <div className="text-center">
          <h1>Seller</h1>
        </div>
        <div className="text-center">
          <h1>Details</h1>
        </div>
      </div>

      <div className="">
        {mytoys.slice(0, limit).map((toy) => (
          <MyToycard key={toy._id} toy={toy} delete={handleDelete}/>
        ))}{" "}
      </div>
      <div className="flex justify-around">
        {limit == 21 ? (
          <button className="btn btn-accent-focus my-4 " onClick={handleLimit}>
            view all toys
          </button>
        ) : (
          <button
            className="btn btn-accent-focus my-4 "
            onClick={handlelowLimit}
          >
            view less
          </button>
        )}{" "}
      </div>
    </div>
  );
};

export default MyToys;
