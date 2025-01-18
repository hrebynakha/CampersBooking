import { useSelector } from "react-redux";
import { selectError } from "../../redux/root/selectors";

const Error = () => {
  const error = useSelector(selectError);
  return (
    <div className="error">
      Ooops, some error happend..
      <span className="errorDetail">Details: {error}</span>
    </div>
  );
};

export default Error;
