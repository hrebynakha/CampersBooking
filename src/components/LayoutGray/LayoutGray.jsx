import { Outlet } from "react-router-dom";
import Container from "../Container/Container";
import Header from "../Header/Header";
import { Toaster } from "react-hot-toast";

const LayoutGray = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Toaster />
    </>
  );
};

export default LayoutGray;
