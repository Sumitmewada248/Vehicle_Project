import { useState,useEffect } from "react"
import axios from "axios"
import Base_Url from "../config/BaseUrl"
import { Table } from "react-bootstrap"

const CustomerOrder = () => {
    const[mydata, setMydata]= useState([]);

        const loadData=async()=>{
            let api=`${Base_Url}admin/customerorder`
            const response = await axios.get(api);
            setMydata(response.data);
        }

        useEffect(()=>{
            loadData();
        },[])
    

    return (
        <>
        <div>
            <h1>Customer Orders</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Product Name</th>
                        <th>Address</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>Total Amount </th>
                    </tr>
                </thead>
                <tbody>
                    {mydata.map(data => (
                        <tr>
                            <td>{data.CustomerName}</td>
                            <td>{data.ProductName}</td>
                            <td>{data.Address}</td>
                            <td>{data.Contact}</td>
                            <td>{data.Email}</td>
                            <td>{data.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
        </>
    )
}

export default CustomerOrder

