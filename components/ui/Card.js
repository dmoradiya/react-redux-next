import React from "react";
import AddToCart from "../src/AddToCart";
import Link from "next/link";

const Card = (props) => {
  return (
    <React.Fragment>
      <div className="bg-blue-600 pt-1 px-2 bg-gradient-to-b from-blue-300 to-blue-400 rounded-xl shadow-lg w-auto">
        <div className="flex justify-center">
          <Link href={`/product/${props.id}`}>
            <a>
              <div className="flex justify-center p-4 bg-blue-400 ring-2 ring-blue-300 rounded-lg shadow-xl h-64">
                <img src={props.img} />
              </div>
            </a>
          </Link>
        </div>
        <div className="p-4">
          <div className="flex flex-col mt-2">
            <h4 className="text-gray-200 text-center py-8 ">{props.title}</h4>
            <p className="text-white text-center py-2">Price: ${props.price}</p>
            <AddToCart cartItem={props} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
