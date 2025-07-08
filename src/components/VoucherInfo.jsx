import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { tailspin } from "ldrs";
import SaleForm from "./SaleForm";
import VoucherTabel from "./VoucherTabel";
import useRecordStore from "../store/useRecordStore";
import toast from "react-hot-toast";

tailspin.register();
const VoucherInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isSending, setIsSending] = useState(false);

  const { records, resetRecord } = useRecordStore();
  const onSubmit = async(data) => {

    setIsSending(true);
    const total = records.reduce((a, b) => a + b.cost, 0);
    const tax = total * 0.07;
    const netTotal = total + tax;

    const currentVoucher = { ...data, records, total, tax, netTotal };
    await fetch(import.meta.env.VITE_API_URL + "/vouchers", {
      method: "POST",
      body: JSON.stringify(currentVoucher),
      headers: {
        "Content-Type": "application/json"
      },
    });

    toast.success("Voucher Created");
    resetRecord();
    reset();
    setIsSending(false);
  };

  function generateInvoiceNumber() {
    const date = new Date();
    const formattedDate = date.toISOString().slice(0, 10).replace(/-/g, "");

    const radomNumber = Math.floor(1000 + Math.random() * 9000);

    const invoiceNumber = `INV-${formattedDate} - ${radomNumber}`;
    return invoiceNumber;
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} id="infoForm">
        <div className="grid grid-cols-4 gap-4">
          <div className=" mb-5">
            <label className="block mb-2 text-base font-medium text-gray-900 dark:text-slate-700">
              Voucher ID
            </label>
            <input
              {...register("voucher_id", {
                required: true,
                minLength: 1,
                maxLength: 100,
              })}
              type="text"
              id="infoForm"
              defaultValue={generateInvoiceNumber()}
              className={`bg-gray-50 border ${
                errors.voucher_id
                  ? "dark:border-red-700 dark:focus:ring-red-500 dark:focus:border-red-600 dark:bg-slate-700"
                  : "border-gray-300 focus:ring-gray-500 focus:border-gray-800"
              } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-gray-700 dark:focus:border-gray-700 dark:placeholder-gray-400 dark:text-white`}
              placeholder="V123456"
            />
            {errors.voucher_id?.type === "required" && (
              <p className="text-red-700  text-sm mt-2">
                Voucher ID is required !
              </p>
            )}
          </div>

          <div className=" mb-5">
            <label className="block mb-2 text-base font-medium text-gray-900 dark:text-slate-700">
              Customer Name
            </label>
            <input
              {...register("customer_name", {
                required: true,
                minLength: 1,
                maxLength: 10,
              })}
              type="text"
              className={`bg-gray-50 border ${
                errors.customer_name
                  ? "dark:border-red-700 dark:focus:ring-red-500 dark:focus:border-red-600 dark:bg-slate-700"
                  : "border-gray-300 focus:ring-gray-500 focus:border-gray-800"
              } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-gray-700 dark:focus:border-gray-700 dark:placeholder-gray-400 dark:text-white`}
              placeholder="Joyy"
            />
            {errors.customer_name?.type === "required" && (
              <p className="text-red-700  text-sm mt-2">
                Customer Name is required !
              </p>
            )}
          </div>

          <div className=" mb-5">
            <label className="block mb-2 text-base font-medium text-gray-900 dark:text-slate-700">
              Customer Email
            </label>
            <input
              {...register("customer_email", {
                required: true,
                minLength: 3,
                maxLength: 30,
              })}
              type="text"
              className={`bg-gray-50 border ${
                errors.customer_email
                  ? "dark:border-red-700 dark:focus:ring-red-500 dark:focus:border-red-600 dark:bg-slate-700"
                  : "border-gray-300 focus:ring-gray-500 focus:border-gray-800"
              } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-gray-700 dark:focus:border-gray-700 dark:placeholder-gray-400 dark:text-white`}
              placeholder="joyy75@gmail.com"
            />
            {errors.customer_email?.type === "required" && (
              <p className="text-red-700  text-sm mt-2">
                Customer Email is required !
              </p>
            )}
          </div>

          <div className=" mb-5">
            <label
              className={`block mb-2 text-base font-medium ${
                errors.sale_date ? "text-red-500" : "text-gray-900"
              } dark:text-slate-700`}
            >
              Sale Date
            </label>
            <input
              {...register("sale_date", {
                required: true,
              })}
              type="date"
              defaultValue={new Date().toISOString().slice(0, 10)}
              className={`bg-gray-50 border ${
                errors.sale_date
                  ? "dark:border-red-700 dark:focus:ring-red-500 dark:focus:border-red-600 dark:bg-slate-700"
                  : "border-gray-300 focus:ring-gray-500 focus:border-gray-800"
              } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-gray-700 dark:focus:border-gray-700 dark:placeholder-gray-400 dark:text-white`}
              placeholder="03072025"
            />
            {errors.sale_date?.type === "required" && (
              <p className="text-red-700  text-sm mt-2">
                Sale Date is required !
              </p>
            )}
          </div>
        </div>
        <div></div>
      </form>

      <SaleForm />
      <VoucherTabel />

      <div className="flex mt-3 justify-end gap-2">
        <input
          {...register("all_correct", {
            required: true,
          })}
          id="all-correct"
          type="checkbox"
          defaultValue
          className="w-4 h-4 rounded-xl bg-gray-900 focus:ring-0 focus:ring-gray-900 dark:focus:border-slate-800 dark:bg-gray-800  dark:focus:ring-gray-700  outline-none border-slate-800 mt-4 "
        />
        {errors.product_name?.type === "required" && (
          <p className="text-red-700  text-sm mt-2"></p>
        )}
        <label
          form="infoForm"
          className="ms-2 text-xs text-gray-900 outline-none dark:text-gray-700 mt-4"
        >
          Make Sure All Field Are Correct!
        </label>
         <button
        type="submit"
        form="infoForm"
        className="text-white bg-slate-800 shadow-inner  shadow-blue-100 hover:bg-slate-900 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-slate-800 dark:hover:bg-slate-900 dark:focus:ring-slate-300 mb-3"
      >
        <span>Save </span>
        {isSending && (
          <l-tailspin
            size="20"
            stroke="5"
            speed="0.9"
            color="white"
          ></l-tailspin>
        )}
      </button>
      </div>
     
    </>
  );
};

export default VoucherInfo;
