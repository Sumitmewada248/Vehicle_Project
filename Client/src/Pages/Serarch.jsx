import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Base_URL from "../config/BaseUrl";
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../cartSlice';

const Search = () => {
    const [mydata, setMydata] = useState([]);
    const [category, setCategory] = useState('');

    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const api = `${Base_URL}customer/searchproduct`;
            const response = await axios.post(api, { category });
            console.log(response.data);
            setMydata(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const ans = mydata.map((key) => {
        return (
            <>
                <div id="cards">
                    <Card style={{ width: "500px", border: "none" }}>
                        <Card.Img variant="top" src={`${Base_URL}${key.defaultimage}`} height="300" />
                        <Card.Body>
                            <Card.Title>Car: {key.name}</Card.Title>
                            <Card.Text>
                                <h5>About: {key.description}</h5>
                                <h4>Brand: {key.brand}</h4>
                                <h4>Type: {key.category}</h4>
                                <h2>Price: {key.price}</h2>
                            </Card.Text>
                            <Button variant="primary"
                                onClick={() => { 
                                    dispatch(addtoCart({ 
                                        id: key._id, 
                                        name: key.name,
                                        description: key.description, 
                                        brand: key.brand, 
                                        category: key.category, 
                                        price: key.price, defaultimage: key.defaultimage, 
                                        images: key.images, qnty: 1 
                                    })); 
                                }}>Add to Cart</Button>
                        </Card.Body>
                    </Card>
                </div>
            </>
        );
    });

    return (
        <>
            <h1>Search</h1>

            <Form onSubmit={handleSubmit} id='formnew'>
                <Form.Group className="mb-3" controlId="formCategory">
                    <Form.Label style={{margin:"auto"}}>Search Vehicle by Fuel Type:</Form.Label>
                    <Form.Select aria-label="Select Category" name="category" onChange={(e) => setCategory(e.target.value)} required style={{ width: "300px",margin:"auto" }}>
                        <option value="">Select Category</option>
                        <option value="Electric">Electric</option>
                        <option value="Petrol">Petrol</option>
                        <option value="Diesel">Diesel</option>
                        <option value="Gas">Gas</option>
                    </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit">Search</Button>
            </Form>

            <div id="cardData">
                {ans}
            </div>
        </>
    );
};

export default Search;

