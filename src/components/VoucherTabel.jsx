import React from "react";
import useRecordStore from "../store/useRecordStore";
import VoucherTabelRow from "./VoucherTabelRow";
import { data } from "autoprefixer";

const VoucherTabel = () => {
  const { records } = useRecordStore();
  const total = records.reduce((a, b) => a + b.cost, 0);
  const tax = total * 0.07;
  const netTotal = total + tax;
 
  return (
    <table className="w-full shadow-lg shadow-slate-700  text-sm text-left rtl:text-right text-gray-300">
      <thead className=" text-gray-300 h-12 bg-slate-900">
        <tr>
          <th scope="col" className="px-6 py-3">
            #
          </th>
          <th scope="col" className="px-6 py-3">
            Product name
          </th>
          <th scope="col" className="px-6 py-3 text-end">
            Price
          </th>
          <th scope="col" className="px-6 py-3 text-end">
            Quantity
          </th>
          <th scope="col" className="px-6 py-3 text-end">
            Cost
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-end table-cell print:hidden"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody id="recordGroup">
        {records.length === 0 && (
          <tr className="hidden last:table-row text-gray-200 bg-gradient-to-t from-slate-800 to-slate-600">
            <td colSpan={6} className="px-6 py-4 text-center">
              There is no Record !
            </td>
          </tr>
        )}
 
        {records.map((record, index) => (
          <VoucherTabelRow key={record.id} record={record} index={index} />
        ))}
      </tbody>
      <tfoot>
        <tr className="text-gray-300 h-12 bg-slate-800">
          <th
            scope="row"
            colSpan={4}
            className="px-6 py-4 text-gray-300 whitespace-nowrap text-end text-[17px] font-semibold"
          >
            Total
          </th>
          <td
            id="recordTotal"
            className="px-6 py-4 text-end font-semibold text-[15px]"
          >
            {total.toFixed(2)}
          </td>
          <td className="px-6 py-4 text-end table-cell print:hidden" />
        </tr>
        <tr className=" text-gray-300 h-12 bg-slate-800 ">
          <th
            scope="row"
            colSpan={4}
            className="px-6 py-4 text-gray-300 whitespace-nowrap text-end text-[15px] font-semibold"
          >
            Tax(Vat 7%)
          </th>
          <td
            id="recordTax"
            className="px-6 py-4 text-end font-semibold text-[15px]"
          >
            {tax.toFixed(2)}
          </td>
          <td className="px-6 py-4 text-end table-cell print:hidden" />
        </tr>
        <tr className="text-gray-300 h-12 bg-slate-900">
          <th
            scope="row"
            colSpan={4}
            className="px-6 py-4 text-gray-300 whitespace-nowrap text-end text-[15px] font-semibold"
          >
            Net Total(MMK)
          </th>
          <td
            id="recordNetTotal"
            className="px-6 py-4 text-end font-semibold text-[15px]"
          >
            {netTotal.toFixed(2)}
          </td>
          <td className="px-6 py-4 text-end table-cell print:hidden" />
        </tr>
      </tfoot>
    </table>
  );
};

export default VoucherTabel;
