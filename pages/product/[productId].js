import React from "react";
import { useRouter } from "next/router";
import Axios from "axios";
import AddToCart from "../../components/src/AddToCart";

const ProductDetail = ({ product }) => {
  const router = useRouter();
  console.log(router.query);

  return (
    <React.Fragment>
      <h2>This is Product Detail Page</h2>   
      {console.log(product)}

      <div className="bg-blue-600 pt-1 px-2 bg-gradient-to-b from-blue-300 to-blue-400 rounded-xl shadow-lg w-auto">
        <div className="flex justify-center">
          <div className="flex justify-center p-4 bg-blue-400 ring-2 ring-blue-300 rounded-lg shadow-xl h-64">
            <img src={product.image} />
          </div>
        </div>
        <div className="p-4">
          <div className="flex flex-col mt-2">
            <h4 className="text-gray-200 text-center py-8 ">{product.title}</h4>
            <p className="text-white text-center py-2">
              Price: ${product.price}
            </p>
            <p className="text-white text-center py-2">{product.description}</p>
            <AddToCart cartItem={product} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export const getStaticPaths = async () => {
  return {
    // get all the required path Id
    paths: [
      { params: { productId: '1' } },
      { params: { productId: '2' } },
      { params: { productId: '3' } },
      { params: { productId: '4' } },
      { params: { productId: '5' } },
      { params: { productId: '6' } },
      { params: { productId: '7' } },
      { params: { productId: '8' } },
      { params: { productId: '9' } },
      { params: { productId: '10' } },
      { params: { productId: '11' } },
      { params: { productId: '12' } },
      { params: { productId: '13' } },
      { params: { productId: '14' } },
      { params: { productId: '15' } },
      { params: { productId: '16' } },
      { params: { productId: '17' } },
      { params: { productId: '18' } },
      { params: { productId: '19' } },
      { params: { productId: '20' } },
    ],
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const id = params.productId;
  const res = await Axios.get(`https://fakestoreapi.com/products/${id}`);

  const productData = res.data;
  return {
    props: { product: productData },
  };
};

export default ProductDetail;
