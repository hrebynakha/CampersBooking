import { useDispatch, useSelector } from "react-redux";
import {
  selectCampersItems,
  selectFilterPageLimit,
  selectTotalResults,
} from "../../redux/campers/selectors";
import { selectLoading } from "../../redux/root/selectors";
import { incrementPage } from "../../redux/campers/slice";
import CamperCard from "../CamperCard/CamperCard";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import NotFoundError from "../NotFoundError/NotFoundError";
import css from "./CampersList.module.css";

const CampersList = () => {
  const dispatch = useDispatch();
  const totalResults = useSelector(selectTotalResults);
  const campers = useSelector(selectCampersItems);
  const limit = useSelector(selectFilterPageLimit);
  const loading = useSelector(selectLoading);

  return (
    <div>
      {campers.length > 0 ? (
        <>
          <ul className={css.list}>
            {campers.map((camper) => (
              <li key={camper.id} className={css.item}>
                <CamperCard camper={camper} />
              </li>
            ))}
          </ul>
          {campers.length < totalResults ? (
            <LoadMoreBtn onClick={() => dispatch(incrementPage())} />
          ) : (
            campers.length > limit && (
              <NotFoundError text="No more results to show..." type="centred" />
            )
          )}
        </>
      ) : (
        !loading && <NotFoundError />
      )}
    </div>
  );
};

export default CampersList;
