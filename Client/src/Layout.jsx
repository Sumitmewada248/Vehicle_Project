import { Outlet } from "react-router-dom";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import TopNav from "./Component/TopNav";


const Layout = () => {
    return (
        <>  
       
        <Header/> 
        <TopNav/>
        <Outlet  />
       
        <Footer/>

        
        
        </>
    );
};  

export default Layout