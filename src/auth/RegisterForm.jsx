const RegisterForm = ({handleChange,handleSubmit,errors,values,touched,isloading}) => {
  return (
    <div className="block">
      <form onSubmit={handleSubmit} className="flex flex-col p-6 rounded-md space-y-4">
      <div>
        <label className="block">Your Name</label>
        <input
         className="w-80 bg-blue-gray-300 rounded-md p-2"
        name="fullname"
        values={values.fullname}
        onChange={handleChange}
         />
      </div>
      <div>
        <label className="block">Your Username</label>
        <input
        className="w-80 bg-blue-gray-300 rounded-md p-2"
        name="username"
        values={values.username}
        onChange={handleChange}
         />
           <p className="text-blue-gray-300 text-xs">codepen.io/username</p>
      </div>
      <div>
        <label className="block">Email</label>
        <input
        className="w-80 bg-blue-gray-300 rounded-md p-2"
        type="email"
        name="email"
        values={values.email}
        onChange={handleChange}
         />
       
      </div>
      <div>
        <label className="block">Choose Password</label>
        <input
        className="w-80 bg-blue-gray-300 rounded-md p-2"
        type="password"
        name="password"
        values={values.password}
        onChange={handleChange}
         />
      </div>
      <div>
      <p class="mb-2">Your Password must:</p>
<ul class="list-disc pl-6 space-y-1">
  <li>Include both Uppercase and Lowercase letters</li>
  <li>Include a Number</li>
  <li>Include one or more of these Special Characters: .@$!%*#?&</li>
  <li>Be between 8 and 100 Characters</li>
</ul>
      </div>
      <button type="submit" className=" w-40 rounded-md p-4 bg-green-300 text-white hover:bg-blue-gray-500 hover:text-white" loading={isloading}>Submit</button>

      </form>

      
    </div>
  )
}
export default RegisterForm