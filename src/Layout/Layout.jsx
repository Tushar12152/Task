import { Outlet } from "react-router-dom";
import Navbar from "../Componets/Navbar";
import Container from "../Container/Container";

const Layout = () => {
    return (
        <div>
           <Container>
           <Navbar/>
            <Outlet/>
           </Container>
        </div>
    );
};

export default Layout;