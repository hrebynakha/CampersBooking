import clsx from "clsx";
import Container from "../Container/Container";
import Navigation from "../Navigation/Navigation";
import css from "./Header.module.css";

const Header = ({ fixed }) => {
  return (
    <header className={clsx(css.header, fixed && css.fixed)}>
      <Container>
        <Navigation />
      </Container>
    </header>
  );
};

export default Header;
