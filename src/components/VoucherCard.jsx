import html2pdf from "html2pdf.js";
import printJS from "print-js";
import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import ProductListSkeletonLoader from "./ProductListSkeletonLoader";
import VoucherCardSkeletonLoader from "./VoucherCardSkeletonLoader";

const fetcher = (url) => fetch(url).then((res) => res.json());

const VoucherCard = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useSWR(
    import.meta.env.VITE_API_URL + "/vouchers/" + id,
    fetcher
  );

  const handlePrint = () => {
    // window.print();
    printJS({
      printable: "printArea",
      type: "html",
      //   header: "INVOICE",
      scanStyles: true,
      css: [
        "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css",
      ],
    });
  };

  const handlePdf = () => {
    console.log("export pdf");
    const element = document.getElementById("printArea");

    // Options for PDF generation
    const opt = {
      margin: 0.1,
      filename: "invoice.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 1 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
    };

    // Convert the element to PDF
    html2pdf().from(element).set(opt).save();
  };

  if (isLoading) return <VoucherCardSkeletonLoader />;

  console.log(data);

  return (
    <div className=" flex gap-10 text-center justify-end mt-2 items-center flex-col">
      <div id="printArea" className="w-[15.8cm]  bg-neutral-200 p-8 rounded-lg">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl text-start font-bold mb-2">INVOICE</h1>
            <p className="text-xl">{data.voucher_id}</p>
          </div>
          <div className="text-right">
            <p className="font-bold">Invoice to</p>
            <p>{data.customer_name}</p>
            <p>Date: {data.sale_date}</p>
          </div>
        </div>

        <table className="w-full mb-8">
          <thead>
            <tr className="border-b-2 border-gray-300">
              <th className="text-left py-2 text-sm">No</th>
              <th className="text-left py-2 text-sm">Description</th>
              <th className="text-right py-2 text-sm">Qty</th>
              <th className="text-right py-2 text-sm">Price</th>
              <th className="text-right py-2 text-sm">Total</th>
            </tr>
          </thead>
          <tbody>
            {data.records.map((record, index) => (
              <tr key={record.id} className="border-b border-gray-200">
                <td className="py-2 text-sm text-start">{index + 1}</td>
                <td className="py-2 text-sm text-start">{record.product.product_name}</td>
                <td className="text-right py-2 text-sm">{record.quantity}</td>
                <td className="text-right py-2 text-sm">
                  {record.product.price}
                </td>
                <td className="text-right py-2 text-sm">{record.cost}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-b border-gray-200">
              <td className="py-2 text-right text-sm" colSpan={4}>
                Total
              </td>
              <td className="py-2 text-right text-sm">{data.total.toFixed(2)}</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 text-right text-sm" colSpan={4}>
                Tax
              </td>
              <td className="py-2 text-right text-sm">{data.tax.toFixed(2)}</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 text-right font-semibold text-sm " colSpan={4}>
                Net Total
              </td>
              <td className="py-2 text-right text-sm font-semibold">{data.netTotal.toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>

        <div className=" text-xs mb-3">
          <div className=" ">
            <h2 className="font-bold mb-2">Payment Transfer to</h2>
            <p>Kpay,Wave - 09975777480</p>
            <p>Bank - KBZ Bank, Account No - 123456789</p>
          </div>
          <div className="  ">
            <h2 className="font-bold text-lg mt-2">Solution By Joyy</h2>
            <p>124, Myinthar 3rd st., South Okkoala</p>
            <p>+959-650-3770-24</p>
            <p>joyy75@gmail.com</p>
          </div>
        </div>

        <div className="border-t-2 border-gray-300 pt-4">
          <p className="mt-4 text-center text-sm">Thanks for shopping with us ❤️</p>
        </div>
      </div>
      <div className="flex gap-5 w-full sm:w-auto mb-7 ">
        <button
          className="text-white flex justify-center items-center gap-3 bg-slate-700 hover:bg-slate-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-slate-800 dark:hover:bg-slate-700 dark:focus:ring-blue-800"
          onClick={handlePrint}
        >
          Print Voucher
        </button>

        <button
          className="text-white flex justify-center items-center gap-3 bg-slate-700 hover:bg-slate-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-slate-800 dark:hover:bg-slate-700 dark:focus:ring-blue-800"
          onClick={handlePdf}
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default VoucherCard;