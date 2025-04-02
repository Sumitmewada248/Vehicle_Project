import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import Base_URL from '../config/BaseUrl';

const AddProduct = () => {
    const [input, setInput] = useState({});
    const [image, setImage] = useState([]);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({ ...prev, [name]: value }));
        console.log(input);
    };

    const handleImage = (e) => {
        setImage(e.target.files);
        console.log(image);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const api = `${Base_URL}admin/addproduct`;
        const formData = new FormData();

        for (let key in input) {
            formData.append(key, input[key]);
        }

        Array.from(image).forEach((file) => {
            formData.append('image', file);
        });

        try {
            const response = await axios.post(api, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            alert("Product added successfully!");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Form style={{ width: "300px" }} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formProductName">
                    <Form.Label>Product name</Form.Label>
                    <Form.Control type="text" name="name" onChange={handleInput} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" name="description" onChange={handleInput} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBrand">
                    <Form.Label>Brand</Form.Label>
                    <Form.Select aria-label="Select Brand" name="brand" onChange={handleInput} required>
                        <option value="">Select Brand</option>
                        <option value="Toyota">Toyota</option>
                        <option value="Suzuki">Suzuki</option>
                        <option value="Mahendra">Mahendra</option>
                        <option value="TATA">TATA</option>
                        <option value="MG">MG</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCategory">
                    <Form.Label>Category</Form.Label>
                    <Form.Select aria-label="Select Category" name="category" onChange={handleInput} required>
                        <option value="">Select Category</option>
                        <option value="Electric">Electric</option>
                        <option value="Petrol">Petrol</option>
                        <option value="Desel">Desel</option>
                        <option value="Gas">Gas</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" name="price" onChange={handleInput} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formImage">
                    <Form.Label>Upload Image</Form.Label>
                    <Form.Control type="file" multiple onChange={handleImage} required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
};

export default AddProduct;
