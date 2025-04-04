import Layout from "./Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Login from "./Pages/Login"
import AdminDashBoard from "./Admin/AdminDashBoard"
import AddProduct from "./Admin/AddProduct"
import CartData from "./Pages/addToCard"

import CheckOut from "./Pages/CheckOut"


const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<h1>Home</h1>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cart" element={<CartData/>}/>
        <Route path ="/checkout" element={<CheckOut/>}/>
      
      
      </Route>
    </Routes>

    <Routes>
           <Route path="admindashboard" element={<AdminDashBoard/>}>
           
            <Route path="addproduct" element={<AddProduct/>}/>
           
           </Route>
           
        </Routes>
    </BrowserRouter>
    </>
  )
}
export default App