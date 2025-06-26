import React from "react";
import { TfiShiftLeftAlt } from "react-icons/tfi";
import { TfiHome } from "react-icons/tfi";
import { Link } from "react-router-dom";

const Breadcrumb = ({ currentPageTitle, links }) => {
  return (
    <div className=" w-full flex gap-3 mb-2 p-2 items-center  ">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              to="/"
              className="inline-flex gap-1 items-center text-sm font-medium text-gray-900 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <TfiHome className="size-4 text-slate-900 hover:text-gray-200 "/>
            </Link>
          </li>
          
          {links &&
            links.map((link, index) => (
              <li key={index} className="inline-flex  items-center">
                <Link
                  to={link.path}
                  className="inline-flex gap-1 items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                >
                  <TfiShiftLeftAlt  />
                   
                  {link.title}
                </Link>
              </li>
            ))}

          <li aria-current="page">
            <div className="flex items-center">
              <TfiShiftLeftAlt  />
              <span className="ms-1 text-sm font-medium md:ms-2  text-slate-800 hover:text-gray-600">
                {currentPageTitle}
              </span>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;