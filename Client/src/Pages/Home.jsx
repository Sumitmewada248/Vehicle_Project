import Carousel from 'react-bootstrap/Carousel';
import img1 from "../Images/1c.jpg";
import img2 from "../Images/b.webp";
import img3 from "../Images/3p.jpg";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../cartSlice';
import Base_URL from '../config/BaseUrl';
import { useState,useEffect } from 'react';
import axios from 'axios';
const Home=()=>{
  const [mydata, setMydata]= useState([]);
  const dispatch= useDispatch();


  const loadData=async()=>{
    let api=`${Base_URL}admin/showproduct`;
    try {
       const response = await axios.get(api);
       console.log(response.data);
       setMydata(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    loadData();
  }, [])


  const ans=mydata.map((key)=>{
    return(
      
      <>
      <div id="cards">
         <Card style={{ width:"500px",border:"none"}}>
      <Card.Img variant="top" src={`${Base_URL}${key.defaultimage}`} height="300"  />
      <Card.Body>
        <Card.Title>Car: {key.name}</Card.Title>
        <Card.Text>
           <h5>About :{key.description}</h5>
           <h4>Brand : {key.brand}</h4>
           <h4> Type: {key.category}</h4>
           <h2> Price : {key.price}</h2>
        </Card.Text>
        <Button variant="primary"
        onClick={()=>{dispatch(addtoCart({id:key._id, name:key.name, description:key.description, brand:key.brand, category:key.category, price:key.price, defaultimage:key.defaultimage, images:key.images, qnty:1}))}}>Add to Cart</Button>
      </Card.Body>
    </Card>
    </div>
      </>
    )
  });

    return(
        <>
          <div id="topbanner">
            <div className="bannerdata">

          

        
            </div>
          </div>

          <div>

          
            <div id="cardData">
            {ans}
            </div>
           

          </div>
         
        </>
    )
}

export default Home;