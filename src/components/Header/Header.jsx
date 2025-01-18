import clsx from "clsx";
import Container from "../Container/Container";
import Navigation from "../Navigation/Navigation";
import css from "./Header.module.css";

const Header = ({ style }) => {
  return (
    <header className={clsx(css.header, css[style])}>
      <Container>
        <Navigation />
      </Container>
    </header>
  );
};

export default Header;
