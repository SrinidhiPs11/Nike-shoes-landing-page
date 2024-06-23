import React from "react";
import {star} from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img className="w-[280px] h-[280px] hover:scale-110 transition-all duration-500" src={imgURL} alt={name} />
      <div className="mt-8 flex justify-start gap-2 items-center">
        <img src={star} alt="rating" width={24} height={24}/>
        <p className="text-sm font-montserrat font-bold text-slate-gray">4.5</p>
      </div>
        <h3 className="text-xl font-semibold font-palanquin leading-normal mt-2">{name}</h3>
        <p className=" text-sm font-semibold font-montserrat text-coral-red mt-2 leading-normal">{price}</p>

    </div>
  );
};

export default PopularProductCard;
