import React, { useContext, useEffect, useState } from "react";
import Toycard from "./Toycard";
import { FaSearch } from "react-icons/fa";
import { Dna } from 'react-loader-spinner'
import { AuthContext } from '../Provider/AuthProvider';
import useTitle from "../../Hooks/useTitle";




const AllToy = () => {
  useTitle("All Toys")
    const { loading } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [data, setData] = useState(toys);
  useEffect(() => {
    fetch("https://y-inky-iota.vercel.app/alltoys")
      .then((res) => res.json())
      .then((info) => {
        setToys(info);
        setData(info);
      });
  }, []);
const [limit,setLimit]=useState(20)
const handleLimit=()=>{
    setLimit(toys.length)
}
const handlelowLimit=()=>{
    setLimit(20)
}
  const filter = (event) => {
    setData(
      toys.filter((toy) =>
        toy.toy_name.toLowerCase().includes(event.target.value)
      )
    );
  };

  if(loading){
    return <div className='flex justify-around'><Dna
    visible={true}
    height="100"
    width="180"
    ariaLabel="dna-loading"
    wrapperStyle={{}}
    wrapperClass="dna-wrapper"
  /></div>
}


  return (
    <div className="mx-12 my-10">
      <div className="mx-16 relative -right-96 ">
        <div className=" bg-stone-400 rounded-xl flex items-center my-3 mx-96">
          <input
            className="mx-2 my-2 pl-3 pr-24 py-2 rounded-xl "
            onChange={filter}
            type="text"
            placeholder="Search"
          />
          <button>
            <FaSearch color="#F7E1AE" size={30} className="mx-2" />
          </button>
        </div>
      </div>

      <div className="rounded-xl grid grid-cols-5 text-2xl bg-stone-600 py-4 text-white">
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
      {data.slice(0,limit).map((toy) => (
        <Toycard key={toy._id} product={toy}  />
      ))}
      {
        data.length==20&&
 <div className="flex justify-around">
 {limit==20?<button className="btn btn-accent-focus my-4 " onClick={handleLimit}>view all toys</button>:
 <button className="btn btn-accent-focus my-4 " onClick={handlelowLimit}>view less</button>}
</div>

      }
     
      
    </div>
  );
};

export default AllToy;
