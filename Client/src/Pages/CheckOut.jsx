import { useSelector, useDispatch } from "react-redux";
import Table from 'react-bootstrap/Table';
import Base_URL from "../config/BaseUrl";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "antd";

const CheckOut=()=>{
        const [user,setUser]= useState({});


        useEffect(()=>{
            if(!localStorage.getItem("token")){
                navigate("/login")
            }
        },[])

    const Product= useSelector(state=>state.mycart.cart);
    console.log(Product);
    const navigate = useNavigate();
    let totalAmount=0;

const loadData=async()=>{
    let api=`${Base_URL}customer/getuser`;
    let response =await axios.post(api,{userid:localStorage.getItem("userid")});
    setUser(response.data);
}

useEffect(()=>{
    loadData();
},[])

  
    const ans=Product.map((key)=>{
        totalAmount+=key.price * key.qnty;
        return(
            <>
               <tr>
              
                <td>{key.name}</td>
                <td>{key.brand}</td>
              
                <td>{key.price}</td>
                <td>
                
                    {key.qnty}
                  
                    
                </td>
                <td>{key.price * key.qnty}</td>
               
               </tr>
            </>
        )
    })

    
   
const initPay = (data) => {
  const options = {
    key: 'rzp_test_mPH6mTj40SX62t',
    amount: data.amount,
    currency: data.currency,
    name: Product[0].name,
    description: 'Test',
    image: Product[0].defaultimage,
    order_id: data.id,
    handler: async (response) => {
      try {
        const verifyURL = `${Base_URL}api/payment/verify`;
        const { data } = await axios.post(verifyURL, response);
      } catch (error) {
        console.log(error);
      }
    },
    theme: {
      color: '#3399cc',
    },
  }
  var rzp1 = new window.Razorpay(options);
  rzp1.open();
};

const handlePay = async () => {
  try {
    const orderURL = `${Base_URL}api/payment/orders`;
    const { data } = await axios.post(orderURL, { amount: totalAmount });
    console.log(data);
    initPay(data.data);
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  const script = document.createElement("script");
  script.src = "https://checkout.razorpay.com/v1/checkout.js";
  script.async = true;
  document.body.appendChild(script);
}, []);



 

 return(
        <>
          <h1 align="center"> Check Out  </h1>
   

        <h1 align="right">
            </h1>
          <Table striped bordered hover>
      <thead>
        <tr>
       
          <th>Product Name</th>
          <th>Brand</th>
        
          <th>Price</th>
          <th>Quantity</th>
          <th> Total </th>
     
          
        </tr>
      </thead>
        <tbody>
         {ans}
         
        </tbody>
        </Table>
<div id="check">
Name:- {user.name} <br />
Address:- {user.address} <br />
City:- {user.city} <br />
Contact:- {user.contact} <br />
Total Payable Amount :{totalAmount}

</div>

<Button onClick={handlePay}>Pay Now</Button>


      
        </>
    )
}
export default CheckOut

