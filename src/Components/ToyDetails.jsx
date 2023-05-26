import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa";
import Rating from "react-rating";
import useTitle from "../Hooks/useTitle";
const ToyDetails = () => {
  useTitle("Toy Details")
  const toys = useLoaderData();
  const {
    toy_name,
    rating,
    price,
    addedBy,
    description,
    email,
    image,
    materials,
    category,
  } = toys;
  console.log(toys);
  return (
    <div className="bg-gray-200 px-20 pb-20">
      <div className="relative -right-80">
        <div className="flex gap-8  items-center py-8 px-8 my-8">
          <img src={image} className="rounded-xl w-1/3" />
          <div className="grid grid-cols-1 gap-5">
            <h1 className="text-4xl text-stone-800 font-bold ">{toy_name}</h1>
            <h2 className="text-xl px-3 border-2 border-stone-500 rounded-xl">
              Category: {category}
            </h2>
            <Rating
              className="text-2xl"
              placeholderRating={rating}
              readonly
              emptySymbol={<FaRegStar color="E57C23" />}
              placeholderSymbol={<FaStar color="E57C23" />}
              fullSymbol={<FaStarHalf color="E57C23" />}
            />
            <h2 className="text-lg font-bold">Price: $ {price}</h2>
          </div>
        </div>
      </div>

      
      <div className="mx-36  flex flex-col justify-start">
        <h1 className="text-2xl text-stone-800 py-3 my-2 rounded-xl bg-white px-10">Material: {materials}</h1>
        <h1 className="text-2xl text-stone-800 py-3 my-2 rounded-xl bg-white px-10">Seller Name: {addedBy}</h1>
        <h1 className="text-2xl text-stone-800 py-3 my-2 rounded-xl bg-white px-10">Seller Email: {email}</h1>
        <h1 className="text-2xl text-stone-800 py-3 my-2 rounded-xl bg-white px-10">Description: {description}</h1>
      </div>
    </div>
  );
};

export default ToyDetails;
