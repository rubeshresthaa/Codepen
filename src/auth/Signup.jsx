import { TiTick } from "react-icons/ti";
import { CiCircleMinus } from "react-icons/ci";
import { useFormik } from "formik";
import { useState } from "react";
import RegisterForm from "./RegisterForm";
import { useRegisterUserMutation } from "./userApi";
import { toast } from "react-toastify";



const Signup = () => {
  const [toggleForm,setToggleForm]=useState(false);
  const [registerUser,{isLoading}]=useRegisterUserMutation();

  const {handleChange,handleSubmit,errors,touched,values,data}=useFormik({
    initialValues:{
      fullname:'',
      username:'',
      email:'',
      password:''
    },
    onSubmit:async(val)=>{
      try {
        const response=await registerUser(val).unwrap();
        toast.success('Successfully Registered')
        
        setToggleForm(false);
        
      } catch (err) {
        toast.error(err.data?.message)
        
      }
      

      


    }

  })
  return (
    <div className="w-2/4 m-auto mt-20
    ">
      <div className="bg-[#5A5F73]">
      <div className="text-center text-brown-100 m-auto mt-5 p-14">
        <h1 className="text-5xl font-semibold">Free</h1>
        <p>Welcome To CodePen.</p>
      </div>
      <div className="grid grid-cols-col-divide mt-10 gap-2">
        <div className="space-y-4 bg-white">
          <div >
          <button className="text-white border-0 bg-blue-gray-400 p-2 w-80 rounded-md text-start ml-4 mt-3 hover:bg-black">Sign Up With google</button>
          </div>
        <div>
        <button className="text-white border-0 bg-blue-gray-400 p-2 w-80 rounded-md text-start ml-4 hover:bg-black">Sign Up With github</button>
        </div>
        <h1 className="ml-4">Or,</h1>
        <div>
        <button  onClick={()=>setToggleForm(!toggleForm)} className="text-white border-0 bg-blue-gray-400 p-2 w-42 rounded-md ml-4 hover:bg-black">Sign Up With Email</button>
        </div>
        {toggleForm && <RegisterForm handleSubmit={handleSubmit} handleChange={handleChange} values={values} errors={errors} touched={touched} isLoading={isLoading} />}
        <div className="ml-4">
          <p>By signing up, you agree to CodePen's <span className="text-blue-300">Terms of Service</span> , <span className="text-blue-300">Code of Conduct</span> , and <span className="text-blue-300">Privacy Policy</span>.

</p>
        </div>
        </div>
        <div className="bg-blue-gray-900 p-4 space-y-2">
          <h1 className="text-white font-bold mb-2">FREE</h1>
         <div className="w-48 h-[0.5px] bg-blue-gray-400"></div>
         <div className="flex justify-between text-blue-gray-400">
          <p>Deploys</p>
          <p>0</p>
         </div>
         <div className="flex justify-between text-blue-gray-400">
          <p>Custom Domains</p>
          <p>0</p>
         </div>
         <div className="text-white">
         <h1>PEN & PROJECT VIEWS</h1>
         </div>
         <div className="w-48 h-[0.5px] bg-blue-gray-400"></div>
         <div className="flex justify-between text-blue-gray-400">
          <p>Editor View </p>
          <TiTick className="text-green-300" />
         </div>
         <div className="flex justify-between text-blue-gray-400">
          <p>Full View </p>
          <TiTick className="text-green-300" />
         </div>
         <div className="flex justify-between text-blue-gray-400">
          <p>Details View </p>
          <TiTick  className="text-green-300"/>
         </div>
         <div className="flex justify-between text-blue-gray-400">
          <p>Shareable Debug View </p>
          <CiCircleMinus  size={20} className="text-red-400"/>
         </div>
         <div className="text-white">
          <h1>PEN FEATURES</h1>
         </div>
         <div className="w-48 h-[0.5px] bg-blue-gray-400"></div>
         <div className="flex justify-between text-blue-gray-400">
          <p>Collab Mode</p>
          <CiCircleMinus  size={20} className="text-red-400"/>
         </div>
         <div className="flex justify-between text-blue-gray-400">
          <p>Professor Mode</p>
          <CiCircleMinus  size={20} className="text-red-400"/>
         </div>
         <div className="flex justify-between text-blue-gray-400">
          <p>Presentation</p>
          <CiCircleMinus  size={20} className="text-red-400"/>
         </div>
         <div className="text-white">
          <h1>ASSET HOSTING</h1>
         </div>
         <div className="w-48 h-[0.5px] bg-blue-gray-400"></div>
         <div className="flex justify-between text-blue-gray-400">
          <p>Storage</p>
          <CiCircleMinus  size={20} className="text-red-400"/>
         </div>
         <div className="text-white">
          <h1>NEED MORE?</h1>
         </div>
         <div className="w-48 h-[0.5px] bg-blue-gray-400"></div>
         <div className="w-44 bg-yellow-200 m-auto rounded-md p-2">
          <p>Unlock the full power of CodePen <span className="text-blue-300 underline md:underline-offset-5">with our PRO plans.</span></p>

         </div>


          
        </div>
      </div>

      </div>
    </div>
  )
}
export default Signup