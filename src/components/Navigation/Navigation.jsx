import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import clsx from "clsx";
import { changeSearchFilter } from "../../redux/campers/slice";
import Logo from "../Logo/Logo";
import css from "./Navigation.module.css";

const Navigation = () => {
  const dispatch = useDispatch();
  const handleResetFilters = () => {
    dispatch(changeSearchFilter({}));
  };
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={css.logo}>
        <Logo />
      </NavLink>
      <div className={css.links}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink
          to="/catalog"
          className={buildLinkClass}
          end
          onClick={handleResetFilters}
        >
          Catalog
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
