import { CiLogout } from "react-icons/ci";
import { Link, Outlet, useNavigate } from "react-router-dom";

const AdminDashBoard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/");
    };

    return (
        <>
            <nav id="adminnav">
                <h1>Admin Dashboard</h1>
                <CiLogout id="logoutbtn" onClick={handleLogout} />
            </nav>

            <div>
                <div id="sidebar">
                    <Link to="addproduct">Add Product</Link>
                </div>
                <div id="outlet">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default AdminDashBoard;
