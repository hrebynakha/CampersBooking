import Icons from "../../assets/icons.svg";

const Icon = ({ name, color = "none", size = 32 }) => (
  <svg className={`icon icon-${name}`} fill={color} width={size} height={size}>
    <use xlinkHref={`${Icons}#icon-${name}`} />
  </svg>
);

export default Icon;
