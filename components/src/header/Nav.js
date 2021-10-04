import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

const Nav = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  return (
    <React.Fragment>
      <nav>
        <ul className="text-lg font-semibold flex flex-row justify-between py-4 bg-red-700 text-white">
          <li className="mx-8 pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="mx-8 pointer">
            <Link href="/product">Shop</Link>
          </li>
          <li className="mx-8">
            <Link href="/product/cart">
              <span className="pointer">
                Cart
                <sup className="bg-green-300 rounded-full px-2 py-1">
                  {cart.cartQty}
                </sup>
                ${cart.cartSubtotal.toFixed(2)}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Nav;
