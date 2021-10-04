import React from 'react';
import Link from 'next/link';

const Pagination = ({productPerPage, totalProducts, paginate}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalProducts/productPerPage); i++) {
        pageNumbers.push(i);
        
    }
    return (
      <div>
        <ul className="flex flex-row justify-center my-2 mx-auto ">
          {pageNumbers.map((pageNumber) => (
            <li className="m-1 p-3 bg-green-200 rounded-full" key={pageNumber}>
                <Link href={`product?Page=${pageNumber}`}>
                    <a onClick={() => paginate(pageNumber)}>{pageNumber}</a>
                </Link>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default Pagination
