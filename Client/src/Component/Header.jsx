
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <>

<nav id="layout">
    <h1>My Vechile</h1>
    <Link to="/home">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/login">Login</Link>
</nav>

        </>
    );
}

export default Header