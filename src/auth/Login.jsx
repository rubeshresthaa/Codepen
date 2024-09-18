import { useFormik } from "formik"
import { useNavigate } from "react-router"
import { FaCaretRight } from "react-icons/fa";
import { NavLink } from "react-router-dom"
import { useLoginUserMutation } from "./userApi";
import { useDispatch } from "react-redux";
import { addUser } from "./userSlice";
const Login = () => {
  const nav=useNavigate()
  const [loginUser,{isLoading}]=useLoginUserMutation();
  const dispatch=useDispatch();
  
const {handleChange,handleSubmit,errors,values,touched}=useFormik({
  initialValues:{
    email:'',
    password:''
  },
  onSubmit:async(val)=>{
    try {
      const response=await loginUser(val).unwrap();
      dispatch(addUser(response))
       
      nav(-1)
      
    } catch (err) {
      
    }


  }
})
  return (

    <div>
      
<div className="flex justify-center items-center min-h-screen gap-6">
  <div className="mb-60">
    <h1 className="text-white font-extrabold
    ">CODEPEN</h1>
    <h1 className="text-white font-extrabold text-3xl mb-5">Log In</h1>
    <div>
    <button className="text-white border-0 bg-blue-gray-400 p-2 w-52 rounded-md hover:bg-black">Login With google</button>
    </div>  
    <div className="mt-5">
    <button className="text-white border-0 bg-blue-gray-400 p-2 w-52 rounded-md hover:bg-black">Login With github</button>
    </div>
    <div className="flex">
    <FaCaretRight className="text-white mb-2"  size={20}/>
    <h4 className="text-white">How social log in works</h4>   
    </div>
     
   
  </div>
<div className="flex flex-col items-center">
          <div className="w-[2px] h-16 bg-gray-400"></div>
          <div className="flex items-center justify-center bg-gray-700 text-white w-12 h-12 rounded-md mx-2 my-2">
            Or
          </div>
          <div className="w-[2px] h-16 bg-gray-400"></div>
          <div className="text-white mt-28">
      <h1>Need an Account?<button className="text-blue-300" onClick={()=>nav('/signup')}>Sign Up Now</button></h1>
    </div>
        </div>
        

      <form onSubmit={handleSubmit} className="flex flex-col p-6 rounded-md">
        <div>
        <label className="block text-white mb-2">UserName or Email</label>
      <input 
      className="w-64  h-12 rounded-sm border-transparent mb-2"
      name='email'
      onChange={handleChange}
      
      value={values.email} />
        </div> 
        <div>
        <label className="block text-white mb-2">Password</label>
      <input 
      className="w-64  h-12 rounded-sm border-transparent mb-10"
      name='password'
      onChange={handleChange}
      
      value={values.password} />
        </div>
        <button type='submit' className="bg-green-500 p-2 w-64 rounded-sm">Log in</button>

       
       

      </form>
      
      
    </div>
   
   
    </div>
    
  )
}
export default Login