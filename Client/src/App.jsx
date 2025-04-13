import Layout from "./Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Login from "./Pages/Login"
import AdminDashBoard from "./Admin/AdminDashBoard"
import AddProduct from "./Admin/AddProduct"
import CustomerOrder from "./Admin/CustomerOrder"
import CartData from "./Pages/addToCard"
import Search from "./Pages/Serarch"
import CheckOut from "./Pages/CheckOut"
import Registration from "./Pages/Register"


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
        <Route path="/search" element={<Search/>}/>
        <Route path="/cart" element={<CartData/>}/>
        <Route path ="/checkout" element={<CheckOut/>}/>
      <Route path="/register" element={<Registration/>}/>
      
      </Route>
    </Routes>

    <Routes>
           <Route path="admindashboard" element={<AdminDashBoard/>}>
           <Route index element={<CustomerOrder/>}/>
            <Route path="addproduct" element={<AddProduct/>}/>
            <Route path="customerorder" element={<CustomerOrder/>}/> 
           
           </Route>
           
        </Routes>
    </BrowserRouter>
    </>
  )
}
export default App