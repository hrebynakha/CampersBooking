import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={css.logo}>
        Travel<span>Truck</span>
      </NavLink>
      <div className={css.links}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={buildLinkClass}>
          Catalog
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
