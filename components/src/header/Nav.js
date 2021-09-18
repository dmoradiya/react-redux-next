import React from "react";
import Link from "next/link"

const Nav = () => {
  return (
    <React.Fragment>
      <nav>
        <ul className="text-lg font-semibold flex flex-row justify-between py-4 bg-red-700 text-white">
          <li className="mx-8"><Link href="/">Home</Link></li>
          <li className="mx-8"><Link href="/product">Shop</Link></li>
          <li className="mx-8"><Link href="/product/cart">Cart</Link></li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Nav;
