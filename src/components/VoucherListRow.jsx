import React, { useState } from "react";
import { CiMaximize2, CiSearch } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiMaximize1 } from "react-icons/ci";

import ShowDate from "./ShowDate";
import { useSWRConfig } from "swr";
import toast from "react-hot-toast";
import { bouncy } from "ldrs";
import { Link } from "react-router-dom";

bouncy.register();

const VoucherListRow = ({
  voucher: { id, voucher_id, customer_name, customer_email, sale_date },
  index,
}) => {
  const { mutate } = useSWRConfig();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteBtn = async () => {
    setIsDeleting(true);
    await fetch(import.meta.env.VITE_API_URL + `/vouchers/${id}`, {
      method: "DELETE",
    });
    mutate(import.meta.env.VITE_API_URL + `/vouchers`);
    toast.success("Successfully Deleted!");
  };
  return (
    
    <tr className="bg-slate-700 hover:bg-slate-600 border-b-[1px] text-gray-200 hover:text-gray-100 transition-colors duration-200">
      <td className="px-6 py-4">{voucher_id}</td>
      <td className="px-6 py-4 ">{customer_name} </td>
      <td className="px-6 py-4 text-end">{customer_email}</td>
      <td className="px-6 py-4 text-end">
        <ShowDate timestamp={sale_date} />
      </td>
      <td className="px-6 py-4 text-end">
        <div className="inline-flex rounded-md shadow-xs gap-0 " role="group">
          <button
            onClick={handleDeleteBtn}
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white hover:bg-gray-100 hover:text-gray-700 focus:z-10 focus:ring-1 focus:ring-slate-700 focus:text-gray-700 dark:bg-transparent dark:border-gray-700 dark:text-red-600 dark:hover:text-white dark:hover:bg-gray-900 dark:focus:ring-slate-500 dark:focus:text-white"
          >
            {isDeleting ? (
              <l-bouncy size="20" speed="1.75" color="pink"></l-bouncy>
            ) : (
              <CiTrash className="inline-block text-xl" />
            )}
          </button>
           <Link to={`/voucherdetail/${id}`}
           className="px-4 py-2 text-sm font-medium text-gray-900 bg-white hover:bg-gray-100 hover:text-gray-700 focus:z-10 focus:ring-1 focus:ring-slate-700 focus:text-gray-700 dark:bg-transparent dark:border-gray-700 dark:text-green-600 dark:hover:text-white dark:hover:bg-gray-900 dark:focus:ring-slate-500 dark:focus:text-white">
          <CiMaximize1 className="inline-block text-xl" />
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default VoucherListRow;
