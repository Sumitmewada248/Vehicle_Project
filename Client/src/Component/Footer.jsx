
const Footer = () => {
    return (
        <>
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-2 offset-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <h5>Our Products</h5>
                        <ul className="list-unstyled">
                            <li>Electronics</li>
                            <li>Clothing</li>
                            <li>Home Goods</li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <h5>Order Tracking</h5>
                        <ul className="list-unstyled">
                            <li>Order Status</li>
                            <li>Shipping Policy</li>
                            <li>Return Policy</li>
                        </ul>
                    </div>
                    <div className="col-3 offset-1">
                        <p>Copyright &copy; 2024 My E-commerce</p>
                        <p>All rights reserved</p>
                    </div>
                </div>
            </div>
                <div className="col-2">
                    <h5>More</h5>
                    <ul className="list-unstyled">
                        <li>
                            <select>
                                <option value="faq">FAQ</option>
                                <option value="support">Support</option>
                                <option value="careers">Careers</option>
                            </select>
                        </li>
                    </ul>
                </div>

        </footer>
        </>
    )
}

export default Footer
