import React, { useState } from "react";
import Axios from "axios";
import Card from "../../components/ui/Card";

const Product = ({ data }) => {
  return (
    <section>
      {console.log(data)}
      <h2 className="text-center mt-4">Welcome to my Store! Shop Now</h2>
      <div className="flex justify-center items-center mt-6 mx-2 h-full overflow-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 lg:8">
          {data.map((product) => (
            <Card
              key={product.id}
              img={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export const getStaticProps = async () => {
  const res = await Axios.get("https://fakestoreapi.com/products");
  
  const productData = res.data;
  return {
    props: { data: productData },
  };
};

export default Product;
