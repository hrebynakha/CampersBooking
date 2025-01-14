import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const LayoutBase = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default LayoutBase;
