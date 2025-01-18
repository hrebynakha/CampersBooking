import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { fetchCampers } from "../../redux/campers/operations";
import { changeSearchFilter } from "../../redux/campers/slice";
import { selectFilter } from "../../redux/campers/selectors";
import { scrollToTop } from "../../utils/helpers/helpers";
import CampersList from "../../components/CampersList/CampersList";
import CampersSearchForm from "../../components/CampersSearchForm/CampersSearchForm";
import ToTopBtn from "../../components/ToTopBtn/ToToBtn";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams("");
  const params = useMemo(
    () => Object.fromEntries(searchParams),
    [searchParams]
  );
  const filter = useSelector(selectFilter);
  useEffect(() => {
    if (JSON.stringify(params) !== "{}") {
      // this for  filter state , not change on blank search pram
      dispatch(changeSearchFilter(params));
    }
  }, [dispatch, params]);

  useEffect(() => {
    dispatch(fetchCampers({ ...filter }));
  }, [dispatch, filter]);

  const handleSearch = (values) => {
    if (values) setSearchParams(values);
    scrollToTop();
  };

  return (
    <div className={css.wrap}>
      <CampersSearchForm onSubmit={handleSearch} />
      <CampersList />
      <ToTopBtn />
    </div>
  );
};

export default CatalogPage;
