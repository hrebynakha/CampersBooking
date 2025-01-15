import Icon from "../../assets/logo.svg";
import PropTypes from "prop-types";

console.log("icon", Icon);

const Logo = ({ width = 174, height = 16 }) => (
  <svg width={width} height={height}>
    <use xlinkHref={`${Icon}#logo`} />
  </svg>
);

export default Logo;
