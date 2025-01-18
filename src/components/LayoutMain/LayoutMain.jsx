import { Outlet } from "react-router-dom";
import Container from "../Container/Container";
import Header from "../Header/Header";
import { Toaster } from "react-hot-toast";
import Content from "../Content/Content";

const LayoutMain = () => {
  return (
    <>
      <Header fixed={true} />
      <Content>
        <Container>
          <Outlet />
        </Container>
      </Content>
      <Toaster />
    </>
  );
};

export default LayoutMain;
