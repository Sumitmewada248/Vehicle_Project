import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { RiAdminFill } from "react-icons/ri";
import { FaShoppingCart, FaUser, FaHeart, FaSearch } from "react-icons/fa";
import Form from 'react-bootstrap/Form';
import Base_URL from '../config/BaseUrl';
import axios from "axios";
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const [adminid, setAdminid] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const Product = useSelector(state => state.Product);
  const ProLength = Product.length;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let api = `${Base_URL}admin/adminlogin`;
      const response = await axios.post(api, { adminid, password });
      console.log(response);
      messageApi.success(response.data.msg);
      setShow(false);
      localStorage.setItem("admin", response.data.Admin.name);
      navigate("/admindashboard");
    } catch (error) {
      messageApi.error(error.response.data.msg);
    }
  };

  return (
    <>
      <div id="header">
        <div id="toplogo"></div>
        <div id="topicons">
          <FaSearch />
          <FaHeart />
          <FaUser />
          <span><FaShoppingCart /> {ProLength}</span>
          <RiAdminFill onClick={handleShow} className='linkicon' />
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Admin Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter Id</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter Admin ID"
                value={adminid} 
                onChange={(e) => setAdminid(e.target.value)} 
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Enter Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Password"
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
      {contextHolder}
    </>
  );
};

export default Header;

