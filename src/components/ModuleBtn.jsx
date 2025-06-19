import React from 'react'
import { Link } from 'react-router-dom'

const ModuleBtn = ( {name, icon, url}) => {
  return (
    <Link to={url} className='flex flex-col items-center mt-4 justify-center p-3 bg-slate-300 broder border-black rounded-lg shadow-2xl text-gray-900 hover:bg-slate-600 hover:text-gray-100 transition-colors duration-200 text-center '>
    {icon}
    <br />
    {name}
    </Link>
  );
};

export default ModuleBtn;