import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { tailspin } from "ldrs";
import toast from "react-hot-toast";
import useSWR from "swr";

tailspin.register();
const fetcher = (url) => fetch(url).then((res) => res.json());
const ProductEditCard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { id } = useParams();
  console.log(id);

  const { data, isLoading, error } = useSWR(
    import.meta.env.VITE_API_URL + `/products/${id}`,
    fetcher
  );

  const [isSending, setIsSending] = useState(false);

  const navigate = useNavigate();
  const handleCreateProduct = async (data) => {
    console.log(data);
    setIsSending(true);

    await fetch(import.meta.env.VITE_API_URL + "/products/"+id, {
      method: "PUT",
      body: JSON.stringify({
        product_name: data.product_name,
        price: data.price,
        created_at: new Date().toISOString(),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setIsSending(false);
    if (data.back_to_product_list) {
      navigate("/product");
    }
    toast.success("Product Update successfulled");
  };
  return (
    <div className="container rounded-lg w-full p-5 mx-auto  mt-7 border-spacing-5 shadow-slate-600 shadow-lg bg-gradient-to-tl from-slate-00 to-slate-300">
      <h1 className=" text-2xl font-semibold mb-3 mt-3">Update Product</h1>
      <p className=" mb-5 text-stone-500 text-sm">
        Make update Product by entering its new name and new price.
      </p>
      {isLoading ? (
        <div className="animate-pulse">
          {/* Product Name Skeleton */}
          <div className="mb-5">
            <div className="h-4 w-32 bg-gray-300 dark:bg-slate-700 rounded mb-2" />
            <div className="h-10 w-full bg-gray-200 dark:bg-slate-800 rounded" />
          </div>

          {/* Product Price Skeleton */}
          <div className="mb-5">
            <div className="h-4 w-32 bg-gray-300 dark:bg-slate-700 rounded mb-2" />
            <div className="h-10 w-full bg-gray-200 dark:bg-slate-800 rounded" />
          </div>

          {/* Checkbox Group Skeleton */}
          <div className="flex items-center gap-3 mt-5 mb-5">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-300 dark:bg-slate-700 rounded-sm" />
              <div className="h-4 w-48 bg-gray-200 dark:bg-slate-800 rounded" />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-300 dark:bg-slate-700 rounded-sm" />
              <div className="h-4 w-64 bg-gray-200 dark:bg-slate-800 rounded" />
            </div>
          </div>

          {/* Buttons Skeleton */}
          <div className="flex justify-end gap-6">
            <div className="h-10 w-32 bg-gray-300 dark:bg-slate-800 rounded" />
            <div className="h-10 w-32 bg-gray-300 dark:bg-slate-800 rounded" />
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(handleCreateProduct)}>
          <div className="animate-puls mb-5">
            <label
              htmlFor="first_name"
              className="block mb-2 text-base font-medium text-gray-900 dark:text-slate-700"
            >
              Product Name
            </label>
            <input
              {...register("product_name", {
                required: true,
                minLength: 3,
                maxLength: 10,
              })}
              defaultValue={data.product_name}
              type="text"
              id="first_name"
              className={`bg-gray-50 border ${
                errors.product_name
                  ? "dark:border-red-700 dark:focus:ring-red-500 dark:focus:border-red-600 dark:bg-slate-700"
                  : "border-gray-300 focus:ring-gray-500 focus:border-gray-800"
              } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-gray-700 dark:focus:border-gray-700 dark:placeholder-gray-400 dark:text-white`}
              placeholder="MacBook Air"
            />
            {errors.product_name?.type === "required" && (
              <p className="text-red-700  text-sm mt-2">
                Product Name is required !
              </p>
            )}
            {errors.minLength?.type === "minLength" && (
              <p className="text-red-600">Product Price is required</p>
            )}
            {errors.maxLength?.type === "maxLength" && (
              <p className="text-red-600">Product Name is required</p>
            )}
          </div>
          <div className=" mb-8">
            <label
              htmlFor="last_name"
              className="block mb-2 text-base font-medium text-gray-900 dark:text-slate-700"
            >
              Product Price
            </label>
            <input
              {...register("price", {
                required: true,
                minLength: 1,
                maxLength: 5,
              })}
               defaultValue={data.price}
              type="number"
              id="last_name"
              className={`bg-gray-50 border ${
                errors.price
                  ? "dark:border-red-700 dark:focus:ring-red-500 dark:focus:border-red-600 dark:bg-slate-700"
                  : "border-gray-300 focus:ring-gray-500 focus:border-gray-800"
              } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-gray-700 dark:focus:border-gray-700 dark:placeholder-gray-400 dark:text-white`}
            />
            {errors.price?.type === "required" && (
              <p className="text-red-700  text-sm mt-2">
                Product Price is required !
              </p>
            )}
            {errors.minLength?.type === "minLength" && (
              <p className="text-red-600">Product Price is required</p>
            )}
            {errors.maxLength?.type === "maxLength" && (
              <p className="text-red-600">Product Name is required</p>
            )}
            <div className="flex items-center gap-3 mt-5 mb-5">
              <div className="flex items-center h-5">
                <input
                  {...register("all_correct", {
                    required: true,
                  })}
                  id="all-correct"
                  type="checkbox"
                  defaultValue
                  className="w-4 h-4 rounded-sm bg-gray-900 focus:ring-0 focus:ring-gray-900 dark:focus:border-slate-800 dark:bg-gray-800  dark:focus:ring-gray-700  outline-none border-slate-800 "
                />
                {errors.product_name?.type === "required" && (
                  <p className="text-red-700  text-sm mt-2"></p>
                )}
                <label
                  htmlFor="all-correct"
                  className="ms-2 text-xs text-gray-900 outline-none dark:text-gray-700"
                >
                  Make Sure All Field Are Correct!
                </label>
              </div>
              <div className="flex items-center  h-5">
                <input
                  {...register("back_to_product_list")}
                  id="back-to-product-list"
                  type="checkbox"
                  defaultValue
                  checked
                  className="w-4 h-4 rounded-sm bg-gray-900 focus:ring-0 focus:ring-gray-900 dark:focus:border-slate-800 dark:bg-gray-800  dark:focus:ring-gray-700  outline-none border-slate-800 "
                />
                {errors.product_name?.type === "required" && (
                  <p className="text-red-700  text-sm mt-2"></p>
                )}
                <label
                  htmlFor="back_to_product_list"
                  className="ms-2 text-xs text-gray-900 outline-none dark:text-gray-700"
                >
                  Back to Product List after saving ?
                </label>
              </div>
            </div>
            <div className="flex justify-end gap-6">
              <button
                type="submit"
                className="text-white bg-slate-800 shadow-inner  shadow-blue-100 hover:bg-slate-900 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-slate-800 dark:hover:bg-slate-900 dark:focus:ring-slate-300"
              >
                <span>Update </span>
                {isSending && (
                  <l-tailspin
                    size="20"
                    stroke="5"
                    speed="0.9"
                    color="white"
                  ></l-tailspin>
                )}
              </button>
              <Link
                to="/product"
                type="cancle"
                className="text-white bg-slate-800 shadow-inner  shadow-blue-100 hover:bg-slate-900 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-slate-800 dark:hover:bg-slate-900 dark:focus:ring-slate-300"
              >
                Cancle
              </Link>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default ProductEditCard;
