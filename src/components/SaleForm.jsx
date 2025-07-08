import React from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import { create } from "zustand";
import useRecordStore from "../store/useRecordStore";

const fetcher = (url) => fetch(url).then((res) => res.json());
const SaleForm = () => {
  const { data, isLoading, error } = useSWR(
    import.meta.env.VITE_API_URL + "/products",
    fetcher
  );
  const { register, handleSubmit, reset } = useForm();

  const { addRecord, changeQuantity, records } = useRecordStore();

  const onSubmit = (data) => {
    const currentProduct = JSON.parse(data.product);
    const currentProductId = currentProduct.id;

    const isExited = records.find(
      ({ product: { id } }) => currentProductId === id
    );

    // console.log(isExited);

    if (isExited) {
      changeQuantity(isExited.id, data.quantity);
    } else {
      addRecord({
        id: Date.now(),
        product: currentProduct,
        quantity: data.quantity,
        cost: currentProduct.price * data.quantity,
        created_at: new Date().toISOString(),
      });
    }

    reset();
  };
  return (
    <div className="container mx-auto mb-5 block print:hidden">
      <form id="recordForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-4 gap-4 text-gray-200 bg-slate-800 shadow-2xl rounded-lg p-5">
          <div className="col-span-2">
            <label className="block mb-2 text-sm text-gray-200 text-[14px] font-semibold">
              Select products
            </label>
            <select
              {...register("product")}
              id="productSelect"
              className="bg-slate-700 border border-slate-300 text-gray-400 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5"
              required
            >
              <option value="">Select a product</option>
              {!isLoading &&
                data.map((product) => (
                  <option key={product.id} value={JSON.stringify(product)}>
                    {product.product_name}
                  </option>
                ))}
            </select>
          </div>
          <div className="col-span-1">
            <div>
              <label
                htmlFor="quantityInput"
                className="block mb-2 text-[14px] font-semibold text-gray-200"
              >
                Quantity
              </label>
              <input
                {...register("quantity")}
                type="number"
                id="quantityInput"
                name="quantity"
                className="bg-slate-700 border border-gray-300 focus-visible:outline-none text-gray-300 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5"
                required
              />
            </div>
          </div>
          <div className="col-span-1">
            <button
              type="submit"
              className="text-gray-200 rounded-2xl bg-slate-700 hover:bg-slate-500 border border-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-800 font-medium sm:text-sm  text-sm px-5 py-2.5 text-center w-full mt-6 h-12"
            >
              Add New
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SaleForm;
