import { NavLink } from "react-router-dom"

const Dialog = ({handleModel}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white p-6 rounded-md shadow-lg w-7/12">
      <h2 className="text-lg font-extrabold mb-4 text-black text-center">Hold Up!</h2>
      <p className="text-blue-gray-200">You’ll have to Log In or Sign Up (for free!) to save your Pen.
      Don’t worry! All your work will be saved to your account.</p>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Username or Email</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded-md bg-blue-gray-100"
            
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 p-2 rounded-md bg-blue-gray-100"
            
          />
        </div>
      </form>
      <div className="mt-4">
        <button
          className="bg-green-600 text-black px-4 py-2 rounded-md hover:bg-green-900 hover:text-white w-full"
          onClick={handleModel}
        >
          Login
        </button>
        <p className="text-blue-400 text-center p-4">Forgot Password?</p>
      </div>
    </div>
  </div>
  )
}
export default Dialog
