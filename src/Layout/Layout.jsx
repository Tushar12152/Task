import { Outlet } from "react-router-dom";
import Navbar from "../Componets/Navbar";
import Container from "../Container/Container";
import Footer from "../Componets/Footer";

const Layout = () => {
  return (
    <div>
      <Container>
        <div className="min-h-screen">
          <Navbar />
          <Outlet />
        </div>
        <Footer />
      </Container>
    </div>
  );
};

export default Layout;
