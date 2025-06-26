import React from 'react'
import { Link } from 'react-router-dom'

const ModuleBtn = ( {name, icon, url}) => {
  return (
    <Link to={url} className='flex flex-col items-center  justify-center p-3 bg-slate-300 broder border-black rounded-lg text-gray-900 hover:bg-slate-500 hover:text-gray-100 transition-colors duration-200 text-center gap-3 shadow-slate-600 shadow-2xl font-medium hover:font-light hover:border hover:border-gray-700  h-full hover:shadow-inherit hover:shadow-none'>
    {icon}
    {name}
    </Link>
  );
};

export default ModuleBtn;