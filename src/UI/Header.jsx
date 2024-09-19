import { FaCloud } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; 
import { IoMdSettings } from "react-icons/io";
import { FaBox } from "react-icons/fa";
import { useState } from 'react';
import Dialog from './Dialog';
import SettingDialog from './SettingDialog';




const Header = () => {

  const [open,setOpen]=useState(false)
  const [settOpen,setSettOpen]=useState(false)
  const nav = useNavigate(); // Hook for navigation

  const handleSetting=()=>setSettOpen(!settOpen)
 
  const handleModel=()=>setOpen(!open)
  return (
    <div className="flex justify-between p-5 text-white bg-blue-gray-900 md:flex-row ">
      <div className="flex items-baseline">
        <h1 className='font-extrabold text-2xl'>CodePen Clone</h1>
      </div>
      <div className="flex space-x-5">
        <button className="bg-blue-gray-700 p-2 rounded-md w-20 hover:bg-blue-gray-500 border-none flex items-center justify-center space-x-2" onClick={handleModel}>
          <FaCloud />
          <span>Save</span>
        </button>

        <button className="bg-blue-gray-700 p-2 rounded-md w-20 hover:bg-blue-gray-500 border-none flex items-center justify-center space-x-2" onClick={handleSetting}>
        <IoMdSettings  />

         <span >Setting</span>
        </button>

        <button className="bg-blue-gray-700 p-2 rounded-md w-20 hover:bg-blue-gray-500 border-none flex items-center justify-center">
        <FaBox />

        </button>

        <button
          onClick={() => nav('/signup')}
          className="bg-green-500 text-black p-2 rounded-md w-20 hover:bg-green-800 hover:text-brown-50 border-none"
        >
          SignUp
        </button>

        <button
          onClick={() => nav('/login')}
          className="bg-blue-gray-700 p-2 rounded-md w-20 hover:bg-blue-gray-500 border-none"
        >
          Log In
        </button>
        {open && <Dialog handleModel={handleModel} />}
        {settOpen && <SettingDialog handleSetting={handleSetting}/>}

      </div>
    </div>
  );
};

export default Header;
