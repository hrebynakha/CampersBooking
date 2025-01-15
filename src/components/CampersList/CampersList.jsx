import { useDispatch, useSelector } from "react-redux";
import {
  selectCampersItems,
  selectTotalResults,
} from "../../redux/campers/selectors";
import css from "./CampersList.module.css";
import { incrementPage } from "../../redux/campers/slice";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import CamperCard from "../CamperCard/CamperCard";

const CampersList = () => {
  const dispatch = useDispatch();
  const totalResults = useSelector(selectTotalResults);
  const campers = useSelector(selectCampersItems);
  return (
    <div className={css.scroll}>
      {campers.length > 0 ? (
        <>
          <ul className={css.list}>
            {campers.map((camper) => (
              <li key={camper.id} className={css.item}>
                <CamperCard camper={camper} />
              </li>
            ))}
          </ul>
          {campers.length < totalResults && (
            <LoadMoreBtn onClick={() => dispatch(incrementPage())} />
          )}
        </>
      ) : (
        <h1>Not found camp</h1>
      )}
    </div>
  );
};

export default CampersList;
