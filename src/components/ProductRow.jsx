import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";
import { Link } from "react-router-dom";
import ShowDate from "./ShowDate";
import { bouncy } from "ldrs";
import { useSWRConfig } from "swr";
import toast from "react-hot-toast";

bouncy.register();

const ProductRow = ({ product: { id, product_name, price, create_at } }) => {
  const { mutate } = useSWRConfig();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteBtn = async () => {
    setIsDeleting(true);
    await fetch(import.meta.env.VITE_API_URL + `/products/${id}`, {
      method: "DELETE",
    });
    mutate(import.meta.env.VITE_API_URL + `/products`);
    toast.success('Successfully toasted!')
  };
  return (
    <>
      <tr className="bg-slate-700 hover:bg-slate-600 border-b-[1px] text-gray-200 hover:text-gray-100 transition-colors duration-200">
        <td className="px-6 py-4">{id}</td>
        <td className="px-6 py-4 ">{product_name} </td>
        <td className="px-6 py-4 text-end">{price}</td>
        <td className="px-6 py-4 text-end">
          <ShowDate timestamp={create_at} />
        </td>

        <td className="px-6 py-4 text-end">
          <div className="inline-flex rounded-md shadow-xs gap-0 " role="group">
            <Link to="{`/product/edit/${id}`}">
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium text-gray-900 bg-white hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-transparent dark:text-green-400 dark:hover:text-white dark:hover:bg-gray-900 dark:focus:ring-blue-500 dark:focus:text-white"
              >
                <CiEdit className="inline-block text-xl" />
              </button>
            </Link>
            <Link to="">
              <button
                onClick={handleDeleteBtn}
                type="button"
                className="px-4 py-2 text-sm font-medium text-gray-900 bg-white hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-transparent dark:border-gray-700 dark:text-red-600 dark:hover:text-white dark:hover:bg-gray-900 dark:focus:ring-blue-500 dark:focus:text-white"
              >
                {isDeleting ? (
                  <l-bouncy size="20" speed="1.75" color="red"></l-bouncy>
                ) : (
                  <CiTrash className="inline-block text-xl" />
                )}
              </button>
            </Link>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ProductRow;
