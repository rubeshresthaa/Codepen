import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./UI/RootLayout";
import Home from "./components/Home";
import Login from "./auth/Login";
import SignUp from "./auth/Signup";


function App() {
  const router=createBrowserRouter([{
    path:'/',
    element:<RootLayout/>,
    children:[
      {
        index:true,
        element:<Home />
      },
      {
        path:'login',
        element:<Login />
      },
      {
        path:'signup',
        element:<SignUp />
      },
      

    ]
  }])
  return (
   <RouterProvider router={router} />
  );
}

export default App;
