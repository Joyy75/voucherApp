import React from "react";

const ProductListEmptyStage = () => {
  return (
    <tr className="bg-slate-700 hover:bg-slate-600 border-b text-gray-200 hover:text-gray-100 transition-colors duration-200 hidden">
      <td className="px-6 py-4 text-center" colSpan={5}>
        There are no products .
      </td>
    </tr>
  );
};

export default ProductListEmptyStage;
