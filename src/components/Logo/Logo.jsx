import Icon from "../../assets/logo.svg";

const Logo = ({ width = 136, height = 16 }) => (
  <svg width={width} height={height}>
    <use xlinkHref={`${Icon}#logo`} />
  </svg>
);

export default Logo;
