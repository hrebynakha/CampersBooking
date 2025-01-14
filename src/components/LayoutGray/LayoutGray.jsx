import { Outlet } from "react-router-dom";
import Container from "../Container/Container";
import Header from "../Header/Header";

const LayoutGray = () => {
  return (
    <>
      <Header style="gray" />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default LayoutGray;
