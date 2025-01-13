import Container from "../Container/Container";
import Navigation from "../Navigation/Navigation";
import css from "./Header.module.css";
const Header = () => {
  return (
    <header className={css.header}>
      <Container>
        <Navigation />
      </Container>
    </header>
  );
};

export default Header;
