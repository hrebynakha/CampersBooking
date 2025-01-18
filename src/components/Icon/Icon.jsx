import clsx from "clsx";
import Icons from "../../assets/icons.svg";

const Icon = ({ name, color = "none", size = 32, className = "" }) => {
  return (
    <svg
      className={clsx("icon", `icon-${name}`, className)}
      style={{ fill: color }}
      width={size}
      height={size}
    >
      <use xlinkHref={`${Icons}#icon-${name}`} />
    </svg>
  );
};

export default Icon;
