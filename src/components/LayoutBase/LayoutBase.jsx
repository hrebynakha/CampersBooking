import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Content from "../Content/Content";

const LayoutBase = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default LayoutBase;
