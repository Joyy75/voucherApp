import React from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import useSWR from "swr";
import ProductListSkeletonLoader from "./ProductListSkeletonLoader";
import ProductListEmptyStage from "./ProductListEmptyStage";
import ProductRow from "./ProductRow";

const fetcher = (url) => fetch(url).then((res) => res.json());

const ProductList = () => {
  // console.log(import.meta.env.VITE_API_URL);
  const { data, isLoading, error } = useSWR(
    "http://localhost:5000/products",
    fetcher
  );



  return (
    <div className=" h-full p-3 bg-gradient-to-bl from-slate-300 to-slate-800 rounded-lg border  border-slate-600 shadow-inner shadow-slate-800 dark:bg-slate-900 dark:border-slate-700 dark:shadow-slate-800">
      <div className=" flex justify-between mb-2">
        <div className="">
          <div className="relative mb-3 mt-3">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>

            <form className="flex items-center max-w-sm mx-auto">
              <label htmlFor="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <CiSearch className="text-gray-500 dark:text-gray-300" />
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-900 border border-gray-900 text-gray-900 text-sm rounded-lg  focus:border-slate-500 block w-full ps-10 p-2.5  dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-slate-500"
                  placeholder="Search Products"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <Link
            to="/product/create"
            className="text-gray-300 flex justify-center items-center gap-3 bg-gray-900 hover:bg-slate-900 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-slate-800 dark:hover:bg-slate-950 hover:text-white transition-colors duration-200"
          >
            Add New Product
            <CiCirclePlus className="text-xl" />
          </Link>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md mb-4">
        <table className="w-full text-sm text-left rtl:text-right text-stone-500 dark:text-stone-400 border border-slate-600 ">
          <thead className="text-sm text-gray-100 uppercase bg-gradient-to-t from-slate-400 to-slate-800 ">
            <tr>
              <th scope="col" className="px-6 py- font-light">
                
              </th>
              <th scope="col" className="px-6 py-3 font-light">
                Product
              </th>

              <th scope="col" className="px-6 py-3 text-end font-light">
                Price
              </th>
              <th scope="col" className="px-6 py-3 text-end font-light">
                Create At
              </th>
              <th scope="col" className="px-6 py-3 text-center font-light">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <ProductListSkeletonLoader />
            ) : 
            data.length === 0 ? (<ProductListEmptyStage />
            ) : (
              data.map ((product) => <ProductRow key={product.id} product={product}/> )
            )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
