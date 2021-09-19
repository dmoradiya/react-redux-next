import React from "react";
import { useDispatch } from "react-redux";
import { cartSliceActions } from "../store/cart-slice";

const AddToCart = (props) => {
const dispatch = useDispatch()
    const addToCartHandler = () => {
        console.log(props.cartItem)
        const { id, image, title, price } = props.cartItem;
        console.log(id)
        console.log(price)
        dispatch(cartSliceActions.addToCart(
            id,
            image,
            title,
            price
        ))

    }

  return (
    <button onClick={addToCartHandler} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 pz-4 rounded">
      Add to Cart
    </button>
  );
};

export default AddToCart;
