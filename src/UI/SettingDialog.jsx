import { useFormik } from "formik"

const SettingDialog = ({handleSetting}) => {
 const {handleChange,handleSubmit,values}= useFormik({
initialValues:{
  title:'',
  description:'',
  tags:''
},
onSubmit:(value)=>{

}
  })
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-blue-gray-900 p-6 rounded-md shadow-lg w-7/12">
      <h2 className="text-white">Pen Settings</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2 rounded-lg p-4">
        <div className="bg-blue-gray-800 shadow-md rounded-lg p-4">
          <label className="block font-semibold">Pen Title</label>
          <input type="text"
          name='title'
          className="w-full rounded-md p-2 text-black"
          onChange={handleChange}
          placeholder="Untitled"
           />
        </div>
        <div className="bg-blue-gray-800 shadow-md rounded-lg p-4">
          <label className="block font-semibold">Pen Description</label>
          <textarea name="description"
          onChange={handleChange}
          className="w-full rounded-md p-2 text-black"
          placeholder="Enter Description Here"
          ></textarea>
        </div>
        <div className="bg-blue-gray-800 shadow-md rounded-lg p-4">
          <label className="block font-semibold">Tags</label>
          <input type="text"
          className="w-full rounded-md p-2 text-black"
          name='tags'
          onChange={handleChange}
          placeholder="Untitled"
           />
        </div>




      </form>
      <div className="flex justify-end"> 
        <button className=" bg-green-400 p-2 rounded-md text-black hover:bg-green-900 hover:text-white" onClick={handleSetting}>Close</button>
        </div>
     
      </div>
    </div>
  )
}
export default SettingDialog